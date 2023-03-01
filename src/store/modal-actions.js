import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    product: {
      name: "",
      price: 0,
      long_desc: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      _id: "",
      category: "",
      short_desc: "",
    },
    display: false,
  },
  reducers: {
    showPopup(state, action) {
      state.display = true;
      state.product = action.payload;
    },
    hidePopup(state) {
      state.display = false;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
