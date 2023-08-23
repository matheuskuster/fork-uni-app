import { createAsyncThunk } from '@reduxjs/toolkit';

import { CreditCardBrand } from './creditCardSlice';

import {
  billingService,
  BillingServiceError,
} from '@/services/billing-service';

interface AddCreditCardRequest {
  cvv: string;
  expirationMonth: string;
  expirationYear: string;
  holderName: string;
  number: string;
  cardName?: string;
  holderInfo: {
    complement?: string;
    number: string;
    zipcode: string;
    cpf: string;
    email: string;
    name: string;
    phone: string;
  };
}

interface CreditCard {
  id: string;
  name?: string;
  lastFourDigits: string;
  brand: CreditCardBrand;
}

interface AddCreditCardResponse {
  creditCard: CreditCard;
}

interface MyCreditCardsResponse {
  creditCards: CreditCard[];
}

export const addCreditCard = createAsyncThunk(
  'billing/addCreditCard',
  async (body: AddCreditCardRequest, { rejectWithValue }) => {
    try {
      const response = await billingService.post('/v1/credit-cards', body);

      return response.data as AddCreditCardResponse;
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

export const myCreditCards = createAsyncThunk(
  'billing/myCreditCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await billingService.get('/v1/credit-cards/my');

      return response.data as MyCreditCardsResponse;
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
