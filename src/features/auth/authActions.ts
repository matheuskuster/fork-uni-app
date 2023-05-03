import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService, AuthServiceError } from '@/services/auth-service';

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInResponse {
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
