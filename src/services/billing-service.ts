import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const billingService = axios.create({
  baseURL: `${getDevelopmentURL()}/billing`,
});

export type BillingServiceError = AxiosError<{
  message: string;
}>;

export function applyBillingServiceToken(token: string) {
  billingService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
