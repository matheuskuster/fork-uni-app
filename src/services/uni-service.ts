import axios, { AxiosError } from 'axios';

import { getURL } from './url';

export const uniService = axios.create({
  baseURL: `${getURL()}/uni`,
});

export type UniServiceError = AxiosError<{
  message: string;
}>;

export function applyUniServiceToken(token: string) {
  uniService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
