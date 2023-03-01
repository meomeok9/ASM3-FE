import { createSlice } from "@reduxjs/toolkit";
const cartSlide = createSlice({
  name: "cart",
  initialState: {
    owner: "",
    items: [],
  },
  reducers: {
    setOwner(state, action) {
      state.owner = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    reset(state) {
      state.owner = "";
      state.items = [];
    },

    addCart(state, action) {
      const productId = action.payload.productId;
      const quan = action.payload.quan;
      const price = action.payload.price;
      const exist = state.items.find((item) => item.productId === productId);

      if (!exist) {
        state.items.push({ productId, quan, price });
      } else {
        exist.quan += quan;
      }
    },
    removeCart(state) {
      state.items = [];
    },
    updateCart(state, action) {
      const exist = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      exist.quan = action.payload.quan;
    },
    deleteCart(state, action) {
      const index = state.items.findIndex(
        (item) => item.productId === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});
export const cartActions = cartSlide.actions;
export default cartSlide.reducer;
