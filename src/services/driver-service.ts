import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const driverService = axios.create({
  baseURL: `${getDevelopmentURL()}/drivers`,
});

export type DriverServiceError = AxiosError<{
  message: string;
}>;

export function applyDriverServiceToken(token: string) {
  driverService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
