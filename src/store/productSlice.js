import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    createProduct: (state, action) => {
      return [...state, action.payload];
    },
    deleteProduct: (state, action) => {
      let newProducts = state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { createProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
