import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { signUpUser } from './signupActions';

interface SignupState {
  cpf: string | null;
  name: string | null;
  email: string | null;
  birthDate: string | null;
  gender: string | null;
  password: string | null;
  phone: string | null;
  googleId: string | null;
  error: string | null;
  isCreating: boolean;
}

const initialState: SignupState = {
  cpf: null,
  name: null,
  email: null,
  birthDate: null,
  gender: null,
  password: null,
  phone: null,
  googleId: null,
  error: null,
  isCreating: false,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addPhoneNumber: (state, action: PayloadAction<{ phone: string }>) => {
      const { phone } = action.payload;
      state.phone = phone;
    },
    addPersonalData: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        gender: string;
        birth: string;
        cpf: string;
      }>,
    ) => {
      const { name, email, gender, birth, cpf } = action.payload;
      state.name = name;
      state.email = email;
      state.gender = gender;
      state.birthDate = birth;
      state.cpf = cpf;
    },
    addPassword: (state, action: PayloadAction<{ password: string }>) => {
      const { password } = action.payload;
      state.password = password;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.isCreating = false;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.isCreating = false;
    });
  },
});

export const { addPhoneNumber, addPersonalData, addPassword } =
  signupSlice.actions;
