import { httpClient } from '../httpClient';

export const AUTH_API = {
  signUp: async (data) => {
    return httpClient({
      method: 'POST',
      url: '/auth/register',
      data,
    });
  },
};
