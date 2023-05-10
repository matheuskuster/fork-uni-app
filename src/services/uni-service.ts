import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const uniService = axios.create({
  baseURL: `${getDevelopmentURL()}/uni`,
});

export type UniServiceError = AxiosError<{
  message: string;
}>;

export function applyUniServiceToken(token: string) {
  uniService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
