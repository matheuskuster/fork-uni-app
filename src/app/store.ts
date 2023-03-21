import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { authSlice } from '@/features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
