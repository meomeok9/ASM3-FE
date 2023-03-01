import { createSlice } from "@reduxjs/toolkit";

const activeTypeSlice = createSlice({
  name: "activeType",
  initialState: {
    arr: [
      { p: "all", at: false },
      { p: "iphone", at: false },
      { p: "ipad", at: false },
      { p: "mac", at: false },
      { p: "airpod", at: false },
      { p: "watch", at: false },
      { p: "mouse", at: false },
      { p: "keybroad", at: false },
      { p: "other", at: false },
    ],
  },
  reducers: {
    activeType(state, action) {
      //de-active all p
      state.arr.map((p) => (p.at = false));
      //select the selected from state
      const s = state.arr.findIndex((p) => p.p === action.payload);

      //active the selected s
      state.arr[s].at = true;
    },
  },
});

export const activeTypeActions = activeTypeSlice.actions;
export default activeTypeSlice.reducer;
