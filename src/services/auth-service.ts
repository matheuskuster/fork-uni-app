import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const authService = axios.create({
  baseURL: `${getDevelopmentURL()}/auth`,
});

export type AuthServiceError = AxiosError<{
  message: string;
}>;

export function applyAuthServiceToken(token: string) {
  authService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
