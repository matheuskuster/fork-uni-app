import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService, AuthServiceError } from '@/services/auth-service';

interface SignInCredentials {
  email: string;
  password: string;
}

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async (credentials: SignInCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.post('/auth/sign-in', credentials);
      return response.data;
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
