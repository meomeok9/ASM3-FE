import { createSlice } from "@reduxjs/toolkit";
const BoutiqueSLide = createSlice({
  name: "boutique",
  initialState: {
    boutiqueActive: false,
  },
  reducers: {
    deactiveBoutique(state) {
      state.boutiqueActive = false;
    },
    activeBoutique(state) {
      state.boutiqueActive = true;
    },
  },
});
export const boutiqueActions = BoutiqueSLide.actions;
export default BoutiqueSLide.reducer;
