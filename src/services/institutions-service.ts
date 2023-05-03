import axios, { AxiosError } from 'axios';

import { getDevelopmentURL } from './url';

export const institutionService = axios.create({
  baseURL: `${getDevelopmentURL()}/institutions`,
});

export type InstitutionsServiceError = AxiosError<{
  message: string;
}>;

export function applyInstitutionServiceToken(token: string) {
  institutionService.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${token}`;
}
