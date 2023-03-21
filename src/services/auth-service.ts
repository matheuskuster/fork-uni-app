import axios, { AxiosError } from 'axios';

// TODO: Really use this service
export const authService = axios.create({
  baseURL: 'http://localhost:3000/auth',
});

export type AuthServiceError = AxiosError<{
  message: string;
}>;
