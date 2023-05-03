import { createSlice } from '@reduxjs/toolkit';

import { signInUser } from './authActions';

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
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
  },
});

export const { signOut } = authSlice.actions;
