import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '@/features/auth/authSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';
import { studentSlice } from '@/features/student/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    quotation: quotationSlice.reducer,
    student: studentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
