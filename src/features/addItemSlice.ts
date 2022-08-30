import {  createSlice } from "@reduxjs/toolkit";
import { AddProductState } from "../interfaces/common.interface";
import { addProduct } from "../services/item.service";


const initialState: AddProductState = {
  loading: false,
  error: "",
};

export const addItem = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addProduct.pending, (state: AddProductState) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state: AddProductState) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addProduct.rejected, (state: AddProductState) => {
      state.loading = false;
      state.error = "Failed to load";
    });
  },
});

export default addItem.reducer;
