import { createAsyncThunk } from '@reduxjs/toolkit';

import { driverService, DriverServiceError } from '@/services/driver-service';

interface GetDriverByIdRequest {
  id: string;
}

interface GetDriverByIdResponse {
  driver: {
    id: string | null;
    name: string | null;
    email: string | null;
    cpf: string | null;
    phone: string | null;
    cnh: string | null;
    superiorId: string | null;
    userId: string | null;
  };
}

export const getDriverById = createAsyncThunk(
  'driver/getDriverById',
  async (request: GetDriverByIdRequest, { rejectWithValue }) => {
    try {
      const { id } = request;
      const response = await driverService.get(`/v1/${id}`);

      return response.data as GetDriverByIdResponse;
    } catch (error) {
      const typedError = error as DriverServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
