import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { authSlice } from '@/features/auth/authSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    quotation: quotationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
