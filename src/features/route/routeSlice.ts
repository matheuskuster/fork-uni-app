import { createSlice } from '@reduxjs/toolkit';

import { getRouteById } from './routeActions';

interface RouteState {
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
  next: Date | null;
  nextFormatted: string | null;
  recurrence: {
    type: string;
    days: string[];
    months: string[];
  } | null;
  type: string | null;
  isSearchingRoute: boolean | null;
  error: string | null;
}

const initialState: RouteState = {
  id: null,
  driverId: null,
  vehicleId: null,
  university: null,
  studentsIds: [],
  goingHour: null,
  returningHour: null,
  next: null,
  nextFormatted: null,
  recurrence: null,
  type: null,
  isSearchingRoute: null,
  error: null,
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRouteById.pending, (state) => {
      state.isSearchingRoute = true;
    });
    builder.addCase(getRouteById.fulfilled, (state, action) => {
      const { route } = action.payload;
      state.id = route.id;
      state.driverId = route.driverId;
      state.vehicleId = route.vehicleId;
      state.university = route.university;
      state.studentsIds = route.studentsIds;
      state.goingHour = route.goingHour;
      state.returningHour = route.returningHour;
      state.next = route.next;
      state.nextFormatted = route.nextFormatted;
      state.recurrence = route.recurrence;
      state.type = route.type;

      state.isSearchingRoute = false;
    });
    builder.addCase(getRouteById.rejected, (state, action) => {
      state.isSearchingRoute = false;
      state.error = action.payload as string;
    });
  },
});
