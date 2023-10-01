import { createAsyncThunk } from '@reduxjs/toolkit';

import { SubscriptionMethod } from './subscriptionSlice';

import {
  billingService,
  BillingServiceError,
} from '@/services/billing-service';

interface CreateCreditCardSubscriptionRequest {
  value: number;
  creditCardId: string;
}

interface Subscription {
  id: string;
  method: SubscriptionMethod;
  value: number;
  nextDueDate: string;
  creditCard: {
    id: string;
    name?: string;
    lastFourDigits: string;
    brand: string;
  };
}

interface CreateCreditCardSubscriptionResponse {
  subscription: Subscription;
}

interface MySubscriptionResponse {
  subscription: Subscription;
}

export const createCreditCardSubscription = createAsyncThunk(
  'billing/createCreditCardSubscription',
  async (body: CreateCreditCardSubscriptionRequest, { rejectWithValue }) => {
    try {
      const response = await billingService.post(
        '/v1/subscriptions/credit-card',
        body,
      );

      return response.data as CreateCreditCardSubscriptionResponse;
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

export const mySubscription = createAsyncThunk(
  'billing/mySubscription',
  async (_, { rejectWithValue }) => {
    try {
      const response = await billingService.get('/v1/subscriptions/my');

      return response.data as MySubscriptionResponse;
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
