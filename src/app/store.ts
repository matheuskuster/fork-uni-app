import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { authSlice } from '@/features/auth/authSlice';
import { quotationSlice } from '@/features/quotation/quotationSlice';
import { signupSlice } from '@/features/signup/signupSlice';
import { studentSlice } from '@/features/student/studentSlice';

const authPersistConfig = {
  key: '@voudevanuni:token',
  storage: AsyncStorage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    signup: signupSlice.reducer,
    quotation: quotationSlice.reducer,
    student: studentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
