import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  Address,
  StudentPaymentStatusProps,
  StudentStatusProps,
} from './studentSlice';

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
    status: StudentStatusProps;
    paymentStatus: StudentPaymentStatusProps;
    routeId: string | null;
  };
}

interface CreateNoBoardingRequest {
  studentId: string;
}

interface CreateNoBoardingResponse {
  noBoarding: {
    id: string;
  };
}

interface GetNoBoardingResponse {
  isBoarding: boolean;
  noBoardingId: string;
}

interface DeleteNoBoardingRequest {
  noBoardingId: string;
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

export const getStudent = createAsyncThunk(
  'student/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await uniService.get('/v1/students/me');

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

export const createNoBoarding = createAsyncThunk(
  'student/createNoBoarding',
  async (request: CreateNoBoardingRequest, { rejectWithValue }) => {
    try {
      const response = await uniService.post('/v1/no-boardings', request);

      return response.data as CreateNoBoardingResponse;
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

export const getNoBoarding = createAsyncThunk(
  'student/getNoBoarding',
  async (_, { rejectWithValue }) => {
    try {
      const response = await uniService.get('/v1/no-boardings/next-trip');

      return response.data as GetNoBoardingResponse;
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

export const deleteNoBoarding = createAsyncThunk(
  'student/deleteNoBoarding',
  async (request: DeleteNoBoardingRequest, { rejectWithValue }) => {
    try {
      const { noBoardingId } = request;
      await uniService.delete(`/v1/no-boardings/${noBoardingId}`);
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
