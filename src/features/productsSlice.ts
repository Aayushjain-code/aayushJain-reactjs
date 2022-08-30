import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../interfaces/common.interface";
import { fetchProducts, getProduct } from "../services/products.service";

const initialState: ProductState = {
  products: [],
  selectedProduct: {},
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProducts.pending, (state: ProductState) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state: ProductState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state: ProductState) => {
      state.loading = false;
      state.products = [];
      state.error = "Failed to load";
    });

    builder.addCase(getProduct.pending, (state: ProductState) => {
      state.loading = true;
    });
    builder.addCase(
      getProduct.fulfilled,
      (state: ProductState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.selectedProduct = action.payload;
      }
    );
    builder.addCase(getProduct.rejected, (state: ProductState) => {
      state.loading = false;
      state.selectedProduct = [];
      state.error = "Failed to load";
    });
  },
});

export default productSlice.reducer;
