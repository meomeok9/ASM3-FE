import { createSlice } from "@reduxjs/toolkit";
const loginSlide = createSlice({
  name: "login",
  initialState: {
    userName: "",
    userId: "",
    email: "",
    phoneNumber: "",
    token: "",
    isLogin: false,
  },
  reducers: {
    onLogin(state, action) {
      state.userName = action.payload.fullName;
      state.userId = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.isLogin = true;
    },
    onLogout(state) {
      state.userName = "";
      state.isLogin = false;
      state.token = "";
    },
  },
});
export const loginActions = loginSlide.actions;
export default loginSlide.reducer;
