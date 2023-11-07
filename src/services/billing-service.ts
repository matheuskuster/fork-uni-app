import axios, { AxiosError } from 'axios';

import { getURL } from './url';

export const billingService = axios.create({
  baseURL: `${getURL()}/billing`,
});

export type BillingServiceError = AxiosError<{
  message: string;
}>;

export function applyBillingServiceToken(token: string) {
  billingService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
