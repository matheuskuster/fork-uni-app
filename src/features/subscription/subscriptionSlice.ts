import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  createCreditCardSubscription,
  mySubscription,
  changeCard,
} from './subscriptionActions';

export enum SubscriptionMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  PIX = 'PIX',
}

export interface CreditCard {
  id: string;
  name?: string;
  lastFourDigits: string;
  brand: string;
}

interface subscriptionState {
  id: string | null;
  method: SubscriptionMethod | null;
  value: number | null;
  nextDueDate: Date | null;
  creditCard: CreditCard | null;
  isCreating: boolean;
  isFetching: boolean;
  error: string | null;
}

const initialState: subscriptionState = {
  id: null,
  method: null,
  value: null,
  nextDueDate: null,
  creditCard: null,
  isCreating: false,
  isFetching: false,
  error: null,
};

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    selectPaymentMethod: (
      state,
      action: PayloadAction<{
        creditCard?: CreditCard;
        method: SubscriptionMethod;
      }>,
    ) => {
      const { creditCard, method } = action.payload;

      state.method = method;
      state.creditCard = creditCard ?? null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createCreditCardSubscription.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(createCreditCardSubscription.fulfilled, (state, action) => {
      const { subscription } = action.payload;
      state.method = subscription.method;
      state.value = subscription.value;
      state.nextDueDate = new Date(subscription.nextDueDate);
      state.creditCard = subscription.creditCard;

      state.isCreating = false;
    });
    builder.addCase(createCreditCardSubscription.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isCreating = false;
    });
    builder.addCase(mySubscription.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(mySubscription.fulfilled, (state, action) => {
      const { subscription } = action.payload;
      state.id = subscription.id;
      state.method = subscription.method;
      state.value = subscription.value;
      state.nextDueDate = new Date(subscription.nextDueDate);
      state.creditCard = subscription.creditCard;

      state.isFetching = false;
    });
    builder.addCase(mySubscription.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isFetching = false;
    });
    builder.addCase(changeCard.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(changeCard.fulfilled, (state, action) => {
      const { subscriptionCardChange } = action.payload;
      state.creditCard = subscriptionCardChange.creditCard;

      state.isCreating = false;
    });
    builder.addCase(changeCard.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isCreating = false;
    });
  },
});

export const { selectPaymentMethod } = subscriptionSlice.actions;
