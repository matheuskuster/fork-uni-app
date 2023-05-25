import { createSlice } from '@reduxjs/toolkit';

import { sendOtp, verifyOtp } from './otpActions';

export interface OtpState {
  error: string | null;
  isSending: boolean;
  isVerifying: boolean;
  lastSentAt?: Date;
}

const initialState: OtpState = {
  error: null,
  isSending: false,
  isVerifying: false,
};

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendOtp.pending, (state) => {
      state.isSending = true;
      state.lastSentAt = new Date();
    });
    builder.addCase(sendOtp.fulfilled, (state) => {
      state.isSending = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.isSending = false;
      state.error = action.error.message as string;
    });
    builder.addCase(verifyOtp.pending, (state) => {
      state.isVerifying = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state) => {
      state.isVerifying = false;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.isVerifying = false;
      state.error = action.error.message as string;
    });
  },
});
