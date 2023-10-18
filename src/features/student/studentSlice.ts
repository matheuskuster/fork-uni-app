import { createSlice } from '@reduxjs/toolkit';

import {
  createNoBoarding,
  createStudent,
  deleteNoBoarding,
  getNoBoarding,
  getStudent,
} from './studentActions';

export enum StudentPaymentStatusProps {
  PENDING = 'pending',
  PAID = 'paid',
  REJECTED = 'rejected',
}

export enum StudentStatusProps {
  PENDING_ROUTE_ASSIGNMENT = 'pending-route-assignment',
  PENDING_ROUTE_ACCEPTANCE = 'pending-route-acceptance',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  CANCELED = 'canceled',
}

export interface Address {
  city: string;
  complement?: string;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  zipcode: string;
  formatted?: string;
}

interface StudentState {
  id: string | null;
  name: string | null;
  shift: string | null;
  registration?: string | null;
  university: {
    id: string;
    name: string;
    acronym: string;
    address: Address;
  } | null;
  home: Address | null;
  status: StudentStatusProps | null;
  quotationId: string | null;
  quotationCost: number | null;
  paymentStatus: StudentPaymentStatusProps | null;
  routeId: string | null;
  noBoardingId: string | null;
  isBoarding: boolean;
  isLoadingBoarding: boolean;
  isCreating: boolean;
  isFetching: boolean;
  error: string | null;
}

const initialState: StudentState = {
  id: null,
  name: null,
  shift: null,
  registration: null,
  home: null,
  university: null,
  status: null,
  quotationCost: null,
  quotationId: null,
  paymentStatus: null,
  routeId: null,
  noBoardingId: null,
  isBoarding: true,
  isLoadingBoarding: false,
  isCreating: false,
  isFetching: false,
  error: null,
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    signOutStudent: (state) => {
      state.id = null;
      state.name = null;
      state.shift = null;
      state.registration = null;
      state.home = null;
      state.university = null;
      state.status = null;
      state.quotationCost = null;
      state.quotationId = null;
      state.paymentStatus = null;
      state.routeId = null;
      state.noBoardingId = null;
      state.isBoarding = true;
      state.isLoadingBoarding = false;
      state.isCreating = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStudent.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      const { student } = action.payload;
      state.id = student.id;
      state.name = student.name;
      state.registration = student.registration;
      state.home = student.home;
      state.shift = student.shift;
      state.university = student.university;
      state.status = student.status;
      state.quotationCost = student.quotationCost;
      state.quotationId = student.quotationId;
      state.paymentStatus = student.paymentStatus;

      state.isCreating = false;
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.payload as string;
    });
    builder.addCase(getStudent.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getStudent.fulfilled, (state, action) => {
      const { student } = action.payload;
      state.id = student.id;
      state.name = student.name;
      state.registration = student.registration;
      state.home = student.home;
      state.shift = student.shift;
      state.university = student.university;
      state.status = student.status;
      state.quotationCost = student.quotationCost;
      state.quotationId = student.quotationId;
      state.paymentStatus = student.paymentStatus;
      state.routeId = student.routeId;

      state.isFetching = false;
    });
    builder.addCase(getStudent.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload as string;
    });

    builder.addCase(createNoBoarding.pending, (state) => {
      state.isLoadingBoarding = true;
    });
    builder.addCase(createNoBoarding.fulfilled, (state, action) => {
      const { noBoarding } = action.payload;
      state.noBoardingId = noBoarding.id;
      state.isBoarding = false;
      state.isLoadingBoarding = false;
    });
    builder.addCase(createNoBoarding.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoadingBoarding = false;
    });

    builder.addCase(deleteNoBoarding.pending, (state) => {
      state.isLoadingBoarding = true;
    });
    builder.addCase(deleteNoBoarding.fulfilled, (state) => {
      state.noBoardingId = null;
      state.isBoarding = true;
      state.isLoadingBoarding = false;
    });
    builder.addCase(deleteNoBoarding.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoadingBoarding = false;
    });

    builder.addCase(getNoBoarding.pending, (state) => {
      state.isLoadingBoarding = true;
    });
    builder.addCase(getNoBoarding.fulfilled, (state, action) => {
      const { noBoardingId, isBoarding } = action.payload;
      state.noBoardingId = noBoardingId;
      state.isBoarding = isBoarding;
      state.isLoadingBoarding = false;
    });
    builder.addCase(getNoBoarding.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoadingBoarding = false;
    });
  },
});

export const { signOutStudent } = studentSlice.actions;
