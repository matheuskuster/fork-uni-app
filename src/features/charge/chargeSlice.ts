import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { myCharges } from './chargeActions';

import { store } from '@/app/store';

export interface Charge {
  id: string;
  amount: number;
  status: 'confirmed';
  creditCardId: string;
  description: string | null;
  method: 'PIX' | 'CREDIT_CARD';
  paidAt: Date | null;
}

const chargesAdapter = createEntityAdapter<Charge>({
  selectId: (charge) => charge.id,
});

interface ChargeState {
  isLoadingCharges: boolean;
  error: string | null;
}

const initialState: ChargeState = {
  isLoadingCharges: false,
  error: null,
};

export const chargeSlice = createSlice({
  name: 'charges',
  initialState: chargesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(myCharges.pending, (state) => {
      state.isLoadingCharges = true;
    });
    builder.addCase(myCharges.fulfilled, (state, action) => {
      chargesAdapter.setAll(
        state,
        action.payload.charges.map((charge) => ({
          ...charge,
          paidAt: charge.paidAt ? new Date(charge.paidAt) : null,
        })),
      );

      state.isLoadingCharges = false;
    });
    builder.addCase(myCharges.rejected, (state, action) => {
      state.isLoadingCharges = false;
      state.error = action.error.message as string;
    });
  },
});

type RootState = ReturnType<typeof store.getState>;

export const chargesSelectors = chargesAdapter.getSelectors<RootState>(
  (state) => state.charge,
);
