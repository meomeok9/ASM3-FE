import { configureStore } from "@reduxjs/toolkit";
import activeBtnSlice from "./active-action";
import modalSlide from "./modal-actions";
import activeTypeSlice from "./active-type-action";
import categorySlide from "./category-action";
import loginSlide from "./login-action";
import BoutiqueSLide from "./boutique-action";
import cartSlide from "./cart-actions";
import dataSlide from "./dataSlide";
import chatSlide from "./chat-actions";
const store = configureStore({
  reducer: {
    data: dataSlide,
    activeBtn: activeBtnSlice,
    activeType: activeTypeSlice,
    modal: modalSlide,
    category: categorySlide,
    login: loginSlide,
    boutique: BoutiqueSLide,
    cart: cartSlide,
    chat: chatSlide,
  },
});

export default store;
