import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { authSlice } from '@/features/auth/authSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';
import { signupSlice } from '@/features/signup/signupSlice';
import { studentSlice } from '@/features/student/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    signup: signupSlice.reducer,
    quotation: quotationSlice.reducer,
    student: studentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
