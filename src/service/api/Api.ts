import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

enum HttpStatus {
  RequestTimeout = 408,
  ServiceUnavailable = 503,
  InternalServerError = 500,
  Unauthorized = 401,
}

interface ErrorResponse {
  status: HttpStatus;
  data?: {
    message: string;
  };
}

const Api: AxiosInstance = axios.create({
  baseURL: process.env.CORE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  function (config) {
    const accessToken = cookies().get('accessToken')?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

let isRefreshing = false;

const handleNetworkError = (error: any): ErrorResponse => {
  switch (error.code) {
    case 'ECONNABORTED':
      return {
        status: HttpStatus.RequestTimeout,
        data: {
          message: 'The request took too long to complete.',
        },
      };
    case 'ECONNREFUSED':
      return {
        status: HttpStatus.ServiceUnavailable,
        data: {
          message: 'Unable to connect to the server. Please try again later.',
        },
      };
    default:
      return {
        status: HttpStatus.InternalServerError,
        data: {
          message: 'Internal Server Error',
        },
      };
  }
};

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (!error.response) {
      return Promise.reject(handleNetworkError(error));
    }

    const errorResponse = error.response;
    const originalRequest: any = error.config;
    const { status } = errorResponse;

    if (status === 401 && !isRefreshing) {
      const refresh_token = cookies().get('refreshToken')?.value;

      if (refresh_token) {
        isRefreshing = true;
        try {
          const { data } = await Api.post('/auth/refresh-access-token', {
            refresh_token,
          });
          const { access_token } = data;

          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          cookies().set('accessToken', access_token, {
            path: '/',
            expires: expirationDate,
          });

          return Api(originalRequest);
        } catch (refreshError) {
          return Promise.reject(errorResponse);
        } finally {
          isRefreshing = false;
        }
      }
    }

    return Promise.reject(errorResponse);
  },
);

export default Api;
