import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: {
      currentUser: null,
      isLoading: false,
      err: false,
    },
    register: {
      isLoading: false,
      err: false,
      success: false,
    },
  },
  reducers: {
    // action login
    loginStart: (state) => {
      state.login.isLoading = true;
    },
    loginSuccess(state, action) {
      state.login.currentUser = action.payload;
      state.login.isLoading = false;
      state.login.err = false;
    },
    loginFailed(state) {
      state.login.isLoading = false;
      state.login.err = true;
    },

    // action register
    registerStart: (state) => {
      state.register.isLoading = true;
    },
    registerSuccess(state) {
      state.register.isLoading = false;
      state.register.success = true;
    },
    registerFailed(state) {
      state.register.isLoading = false;
      state.register.success = false;
      state.register.err = true;
    },
  },
});
