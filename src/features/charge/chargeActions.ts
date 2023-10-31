import { createAsyncThunk } from '@reduxjs/toolkit';

import { Charge } from './chargeSlice';

import {
  billingService,
  BillingServiceError,
} from '@/services/billing-service';

interface MyChargesResponse {
  charges: Charge[];
}

export const myCharges = createAsyncThunk(
  'billing/myCharges',
  async (_, { rejectWithValue }) => {
    try {
      const response = await billingService.get('/v1/charges');

      return response.data as MyChargesResponse;
    } catch (error) {
      const typedError = error as BillingServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
