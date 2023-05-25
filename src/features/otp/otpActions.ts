import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignInResponse } from '../auth/authActions';
import { verifyUser } from '../auth/authSlice';

import { AuthServiceError, authService } from '@/services/auth-service';

export const sendOtp = createAsyncThunk(
  'otp/send',
  async (_, { rejectWithValue }) => {
    try {
      await authService.post(`/v1/otp/send`);
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

export const verifyOtp = createAsyncThunk(
  'otp/verify',
  async (code: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await authService.post(`/v1/users/verify`, { code });

      if (response.data.user?.verified) {
        dispatch(verifyUser());
      }

      return response.data as SignInResponse['user'];
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
