import { createSlice } from '@reduxjs/toolkit';

import { getUserByToken, signInUser } from './authActions';

import { applyBearerToken } from '@/services/middlewares';

interface User {
  id: string;
  cpf: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  verified: boolean;
  roles: string[];
}

interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isEnrolled: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
  isEnrolled: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    enroll: (state) => {
      state.isEnrolled = true;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoading = false;
      state.isAuthenticated = true;

      applyBearerToken(token);
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.isLoading = false;
    });
    builder.addCase(getUserByToken.pending, (state) => {
      state.isLoading = true;

      applyBearerToken(state.token as string);
    });
    builder.addCase(getUserByToken.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(getUserByToken.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.isLoading = false;
    });
  },
});

export const { signOut, enroll } = authSlice.actions;
