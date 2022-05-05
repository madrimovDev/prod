import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    products: productSlice,
  },
});

export default store;
