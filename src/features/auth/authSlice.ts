import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
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
    signIn(state, action: PayloadAction<{ user: User; token: string }>) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    enroll(state) {
      state.isEnrolled = true;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(signInUser.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(signInUser.fulfilled, (state, action) => {
  //     const { user, token } = action.payload;
  //     state.user = user;
  //     state.token = token;
  //     state.isLoading = false;
  //     state.isAuthenticated = true;
  //   });
  //   builder.addCase(signInUser.rejected, (state, action) => {
  //     state.error = action.error.message as string;
  //     state.isLoading = false;
  //   });
  // },
});

export const { signIn, signOut, enroll } = authSlice.actions;
