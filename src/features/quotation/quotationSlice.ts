import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getQuotation } from './quotationActions';

interface Quotation {
  id: string;
  cost: number;
  recurrence: string;
  shift: string;
  institution: {
    name: string;
    acronym: string;
  };
  neighborhood: {
    id: string;
    name: string;
  };
}

interface QuotationState {
  quotation: Quotation | null;
  choosenShift: string | null;
  zipcodeAddress: {
    zipcode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    coords: {
      latitude: string;
      longitude: string;
    };
  } | null;
  foundQuotation: boolean;
  error: string | null;
  isFetching: boolean;
}

const initialState: QuotationState = {
  quotation: null,
  zipcodeAddress: null,
  choosenShift: null,
  foundQuotation: false,
  error: null,
  isFetching: false,
};

export const quotationSlice = createSlice({
  name: 'quotation',
  initialState,
  reducers: {
    setShift: (state, action: PayloadAction<string>) => {
      state.choosenShift = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuotation.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getQuotation.fulfilled, (state, action) => {
      const { quotations, zipcode } = action.payload;

      const foundQuotation = quotations?.find(
        (quotation) => quotation.shift === state.choosenShift,
      );

      if (zipcode) {
        state.zipcodeAddress = {
          zipcode: zipcode.cep,
          state: zipcode.state,
          city: zipcode.city,
          neighborhood: zipcode.neighborhood,
          street: zipcode.street,
          coords: zipcode.coords,
        };
      }

      if (foundQuotation) {
        state.quotation = {
          id: foundQuotation.id,
          cost: foundQuotation.cost,
          recurrence: foundQuotation.recurrence,
          shift: foundQuotation.shift,
          institution: {
            name: foundQuotation.institution.name,
            acronym: foundQuotation.institution.acronym,
          },
          neighborhood: {
            id: foundQuotation.neighborhood.id,
            name: foundQuotation.neighborhood.name,
          },
        };

        state.foundQuotation = true;
      } else {
        state.foundQuotation = false;
      }

      state.isFetching = false;
    });
    builder.addCase(getQuotation.rejected, (state, action) => {
      state.error = action.error.message as string;
      console.log(action.error);
      state.isFetching = false;
    });
  },
});

export const { setShift } = quotationSlice.actions;
