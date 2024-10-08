import { createSlice } from '@reduxjs/toolkit';

import { getDriverById } from './driverActions';

interface DriverState {
  id: string | null;
  name: string | null;
  email: string | null;
  cpf: string | null;
  phone: string | null;
  cnh: string | null;
  superiorId: string | null;
  userId: string | null;
  isSearchingDriver: boolean;
  error: string | null;
}

const initialState: DriverState = {
  id: null,
  name: null,
  email: null,
  cpf: null,
  phone: null,
  cnh: null,
  superiorId: null,
  userId: null,
  isSearchingDriver: false,
  error: null,
};

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDriverById.pending, (state) => {
      state.isSearchingDriver = true;
    });
    builder.addCase(getDriverById.fulfilled, (state, action) => {
      const { driver } = action.payload;
      state.id = driver.id;
      state.name = driver.name;
      state.email = driver.email;
      state.cpf = driver.cpf;
      state.phone = driver.phone;
      state.cnh = driver.cnh;
      state.superiorId = driver.superiorId;
      state.userId = driver.userId;
      state.isSearchingDriver = false;
    });
    builder.addCase(getDriverById.rejected, (state, action) => {
      state.isSearchingDriver = false;
      state.error = action.payload as string;
    });
  },
});
