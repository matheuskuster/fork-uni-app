import axios, { AxiosError } from 'axios';

export const institutionService = axios.create({
  baseURL: 'http://10.0.2.2:8000/institutions',
});

export type InstitutionsServiceError = AxiosError<{
  message: string;
}>;

export function applyInstitutionServiceToken(token: string) {
  institutionService.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${token}`;
}
