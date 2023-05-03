import axios, { AxiosError } from 'axios';

export const authService = axios.create({
  baseURL: 'http://10.0.2.2:8000/auth',
});

export type AuthServiceError = AxiosError<{
  message: string;
}>;
