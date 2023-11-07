import axios, { AxiosError } from 'axios';

import { getURL } from './url';

export const driverService = axios.create({
  baseURL: `${getURL()}/drivers`,
});

export type DriverServiceError = AxiosError<{
  message: string;
}>;

export function applyDriverServiceToken(token: string) {
  driverService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
