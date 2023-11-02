import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService, AuthServiceError } from '@/services/auth-service';

interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: {
    id: string;
    cpf: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    verified: boolean;
    roles: string[];
  };
  token: string;
}

interface GetMeResponse {
  user: SignInResponse['user'];
}

interface ForgotPasswordRequest {
  email: string;
}

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async (credentials: SignInCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.post('/v1/signin', credentials);

      return response.data as SignInResponse;
    } catch (error) {
      const typedError = error as AuthServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.get('/v1/users/me');

      return response.data as GetMeResponse;
    } catch (error) {
      const typedError = error as AuthServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);

export const deleteAccount = createAsyncThunk(
  'auth/delete',
  async (_, { rejectWithValue }) => {
    try {
      await authService.delete('/v1/users');

      return true;
    } catch (error) {
      const typedError = error as AuthServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: ForgotPasswordRequest, { rejectWithValue }) => {
    try {
      await authService.post('/v1/forgot-password', data);

      return true;
    } catch (error) {
      const typedError = error as AuthServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
