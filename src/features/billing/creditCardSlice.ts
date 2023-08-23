import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { addCreditCard, myCreditCards } from './creditCardActions';

import { store } from '@/app/store';

export enum CreditCardBrand {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  ELO = 'ELO',
  AMEX = 'AMEX',
}

type CreditCard = {
  id: string;
  name?: string;
  lastFourDigits: string;
  brand: CreditCardBrand;
};

const creditCardsAdapter = createEntityAdapter<CreditCard>({
  selectId: (creditCard) => creditCard.id,
});

interface CreditCardState {
  isLoadingCreditCards: boolean;
  error: string | null;
}

const initialState: CreditCardState = {
  isLoadingCreditCards: false,
  error: null,
};

export const creditCardSlice = createSlice({
  name: 'creditCards',
  initialState: creditCardsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCreditCard.pending, (state) => {
      state.isLoadingCreditCards = true;
    });
    builder.addCase(addCreditCard.fulfilled, (state, action) => {
      creditCardsAdapter.addOne(state, action.payload.creditCard);

      state.isLoadingCreditCards = false;
    });
    builder.addCase(addCreditCard.rejected, (state, action) => {
      state.isLoadingCreditCards = false;
      state.error = action.error.message as string;
    });
    builder.addCase(myCreditCards.pending, (state) => {
      state.isLoadingCreditCards = true;
    });
    builder.addCase(myCreditCards.fulfilled, (state, action) => {
      creditCardsAdapter.setAll(state, action.payload.creditCards);

      state.isLoadingCreditCards = false;
    });
    builder.addCase(myCreditCards.rejected, (state, action) => {
      state.isLoadingCreditCards = false;
      state.error = action.error.message as string;
    });
  },
});

type RootState = ReturnType<typeof store.getState>;

export const creditCardsSelectors = creditCardsAdapter.getSelectors<RootState>(
  (state) => state.creditCard,
);
