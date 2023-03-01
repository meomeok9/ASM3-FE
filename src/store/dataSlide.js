import { createSlice } from "@reduxjs/toolkit";
const dataSlide = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      
      state.data = action.payload;
    },
  },
});
export const dataAction = dataSlide.actions;
export default dataSlide.reducer;
