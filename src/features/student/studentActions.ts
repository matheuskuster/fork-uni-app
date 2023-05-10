import { createAsyncThunk } from '@reduxjs/toolkit';

import { Address } from './studentSlice';

import { UniServiceError, uniService } from '@/services/uni-service';

interface CreateStudentRequest {
  name: string;
  institutionId: string;
  shift: string;
  home: {
    city: string;
    complement?: string;
    neighborhood: string;
    number: string;
    state: string;
    street: string;
    zipcode: string;
  };
}

interface CreateStudentResponse {
  student: {
    id: string;
    name: string;
    shift: string;
    university: {
      id: string;
      name: string;
      acronym: string;
      address: Address;
    } | null;
    registration: string | null;
    home: Address;
  };
}

export const createStudent = createAsyncThunk(
  'student/createStudent',
  async (request: CreateStudentRequest, { rejectWithValue }) => {
    try {
      const response = await uniService.post('/v1/students', request);
      return response.data as CreateStudentResponse;
    } catch (error) {
      const typedError = error as UniServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
