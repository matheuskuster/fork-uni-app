import axios, { AxiosError } from 'axios';

import { getURL } from './url';

export const notificationsService = axios.create({
  baseURL: `${getURL()}/notifications`,
});

export type NotificationsServiceError = AxiosError<{
  message: string;
}>;

export function applyNotificationsServiceToken(token: string) {
  notificationsService.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${token}`;
}
