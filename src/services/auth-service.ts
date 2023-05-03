import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const authService = axios.create({
  baseURL: `${getDevelopmentURL()}/auth`,
});

export type AuthServiceError = AxiosError<{
  message: string;
}>;
