import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '@/features/auth/authSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    quotation: quotationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
