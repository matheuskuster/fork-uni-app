import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  institutionService,
  InstitutionsServiceError,
} from '@/services/institutions-service';

interface QuotationRequest {
  institutionId: string;
  cep: string;
}

interface Quotation {
  id: string;
  cost: number;
  recurrence: string;
  shift: string;
  institution: {
    name: string;
    acronym: string;
    type: 'school' | 'university' | 'business';
    attending: string;
    address: {
      city: string;
      street: string;
      number: string;
      neighborhood: string;
      state: string;
      zipcode: string;
    };
  };
  neighborhood: {
    id: string;
    name: string;
  };
}

interface QuotationResponse {
  quotations: Quotation[];
}

export const getQuotation = createAsyncThunk(
  'quotation/getQuotation',
  async (request: QuotationRequest, { rejectWithValue }) => {
    try {
      const { institutionId, cep } = request;
      const response = await institutionService.get(
        `/v1/${institutionId}/quotations/${cep}`,
      );

      return response.data as QuotationResponse;
    } catch (error) {
      const typedError = error as InstitutionsServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
