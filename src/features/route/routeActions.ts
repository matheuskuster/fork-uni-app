import { createAsyncThunk } from '@reduxjs/toolkit';

import { uniService, UniServiceError } from '@/services/uni-service';

interface GetRouteByIdRequest {
  id: string;
}

interface GetRouteByIdResponse {
  route: {
    id: string | null;
    driverId: string | null;
    vehicleId: string | null;
    university: {
      id: string;
    } | null;
    studentsIds: string[];
    goingHour: {
      start: string;
      end: string;
    } | null;
    returningHour: {
      start: string;
      end: string;
    } | null;
    recurrence: {
      type: string;
      days: string[];
      months: string[];
      next: Date;
      nextFormatted: string;
    } | null;
    type: string | null;
  };
}

export const getRouteById = createAsyncThunk(
  'uni/getRouteById',
  async (request: GetRouteByIdRequest, { rejectWithValue }) => {
    try {
      const { id } = request;
      const response = await uniService.get(`/v1/routes/${id}`);

      return response.data as GetRouteByIdResponse;
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
