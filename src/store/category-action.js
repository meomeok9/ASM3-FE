import { createSlice } from "@reduxjs/toolkit";

const categorySlide = createSlice({
  name: 'category',
  initialState: {
    catgr: "all",
  },
  reducers: {
    setCategory(state, action) {
      state.catgr = action.payload;
    },
  },
});
export const categoryActions = categorySlide.actions;

export default categorySlide.reducer;
