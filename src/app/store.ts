import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { authSlice } from '@/features/auth/authSlice';
import { creditCardSlice } from '@/features/billing/creditCardSlice';
import { driverSlice } from '@/features/driver/driverSlice';
import { otpSlice } from '@/features/otp/otpSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';
import { routeSlice } from '@/features/route/routeSlice';
import { signupSlice } from '@/features/signup/signupSlice';
import { studentSlice } from '@/features/student/studentSlice';
import { subscriptionSlice } from '@/features/subscription/subscriptionSlice';

const authPersistConfig = {
  key: '@voudevanuni:token',
  storage: AsyncStorage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    signup: signupSlice.reducer,
    quotation: quotationSlice.reducer,
    student: studentSlice.reducer,
    otp: otpSlice.reducer,
    driver: driverSlice.reducer,
    route: routeSlice.reducer,
    creditCard: creditCardSlice.reducer,
    subscription: subscriptionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
