import { createSlice } from "@reduxjs/toolkit";

const activeBtnSlice = createSlice({
  name: "activeBtn",
  initialState: {
    arr: [
      {
        buttonName: "home",
        active: false,
      },
      {
        buttonName: "shop",
        active: false,
      },
      {
        buttonName: "cart",
        active: false,
      },
      {
        buttonName: "signin",
        active: false,
      },
      {
        buttonName: "signout",
        active: false,
      },
      {
        buttonName: "order",
        active: false,
      },
    ],
  },
  reducers: {
    active(state, action) {
      //de-active all button
      state.arr.map((btn) => (btn.active = false));
      //select the selected from state
      const selected = state.arr.findIndex(
        (btn) => btn.buttonName === action.payload
      );

      //active the selected
      state.arr[selected].active = true;
    },
  },
});

export const activeActions = activeBtnSlice.actions;
export default activeBtnSlice.reducer;
