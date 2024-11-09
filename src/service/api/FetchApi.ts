import { cookies } from 'next/headers';

const BASE_URL: string = process.env.CORE_API_URL || '';

class FetchApi {
  private static async handleResponse(response: Response) {
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  }

  private static async refreshToken(): Promise<string | undefined> {
    const refresh_token = cookies().get('refreshToken')?.value;

    if (refresh_token) {
      try {
        const response = await fetch(`${BASE_URL}/auth/refresh-access-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh_token }),
        });

        if (response.ok) {
          const { access_token } = await response.json();
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          cookies().set('accessToken', access_token, {
            path: '/',
            expires: expirationDate,
          });
          return access_token;
        }
      } catch (error) {
        throw new Error('Failed to refresh access token');
      }
    }

    return undefined;
  }

  static async fetchWithAuth(
    url: string,
    options: RequestInit = {},
  ): Promise<Response> {
    const accessToken = cookies().get('accessToken')?.value;

    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    try {
      const response = await fetch(`${BASE_URL}${url}`, options);

      if (response.status === 401) {
        const newAccessToken = await this.refreshToken();

        if (newAccessToken) {
          // Retry the original request with the new access token
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };
          return fetch(`${BASE_URL}${url}`, options);
        }
      }

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default FetchApi;
