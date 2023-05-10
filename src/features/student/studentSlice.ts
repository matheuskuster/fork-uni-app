import { createSlice } from '@reduxjs/toolkit';

import { createStudent } from './studentActions';

export interface Address {
  city: string;
  complement?: string;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  zipcode: string;
}

interface StudentState {
  shift: string | null;
  registration?: string | null;
  university: {
    id: string;
    name: string;
    acronym: string;
    address: Address;
  } | null;
  home: Address | null;
  isCreating: boolean;
  error: string | null;
}

const initialState: StudentState = {
  shift: null,
  registration: null,
  home: null,
  university: null,
  isCreating: false,
  error: null,
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStudent.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      const { student } = action.payload;
      state.isCreating = false;
      state.registration = student.registration;
      state.home = student.home;
      state.shift = student.shift;
      state.university = student.university;
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.isCreating = false;
      state.error = action.payload as string;
    });
  },
});
