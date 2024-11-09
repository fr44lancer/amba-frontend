import { cookies } from 'next/headers';

const INTERNAL_API_URL: string = process.env.INTERNAL_API_URL || '';
const BASE_URL: string = process.env.CORE_API_URL || '';

class ServerApi {
  private static async refreshToken(): Promise<string | undefined> {
    const refresh_token = cookies().get('refreshToken')?.value;
    if (refresh_token) {
      try {
        const response = await fetch(`${BASE_URL}/auth/refresh-access-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            cookie: cookies().toString(),
          },
          body: JSON.stringify({ refresh_token }),
        });

        if (response.ok) {
          const { access_token } = await response.json();
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          return access_token;
        }
      } catch (error) {
        console.log(error);
        throw new Error('Failed to refresh access token');
      }
    }

    return undefined;
  }

  static async fetch(
    url: string,
    options: RequestInit = {},
  ): Promise<Response> {
    const accessToken = cookies().get('accessToken')?.value;

    if (accessToken) {
      options.headers = {
        ...options.headers,
        credentials: 'include',
        cookie: cookies().toString(),
        Authorization: `Bearer ${accessToken}`,
      };
    }

    try {
      const response = await fetch(`${INTERNAL_API_URL}${url}`, options);
      if (response.status === 401) {
        const newAccessToken = await this.refreshToken();

        if (newAccessToken) {
          options.headers = {
            ...options.headers,
            cookie: cookies().toString(),
            credentials: 'include',
            Authorization: `Bearer ${newAccessToken}`,
          };

          return fetch(`${INTERNAL_API_URL}${url}`, options);
        }
      }

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ServerApi;
