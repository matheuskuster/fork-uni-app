import { createAsyncThunk } from '@reduxjs/toolkit';

import { signInUser } from '../auth/authActions';

import { authService, AuthServiceError } from '@/services/auth-service';

interface SignUpCredentials {
  cpf: string;
  name: string;
  email: string;
  birthDate?: string;
  gender?: string;
  password?: string;
  phone: string;
  googleId?: string;
}

interface SignUpResponse {
  user: {
    cpf: string;
    name: string;
    email: string;
    birthDate: string;
    gender: string;
    password: string;
    phone: string;
    googleId: string;
  };
}

export const signUpUser = createAsyncThunk(
  'signUp/signUpUser',
  async (credentials: SignUpCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await authService.post('/v1/signup', credentials);

      dispatch(
        signInUser({
          email: credentials.email,
          password: credentials.password!,
        }),
      );
      return response.data as SignUpResponse;
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
