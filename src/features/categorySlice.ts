import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState } from "../interfaces/common.interface";
import { getCategories } from "../services/categories.service";

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getCategories.pending, (state: CategoriesState) => {
      state.loading = true;
    });
    builder.addCase(
      getCategories.fulfilled,
      (state: CategoriesState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.error = "";
        state.categories = action.payload;
      }
    );
    builder.addCase(
      getCategories.rejected,
      (state: CategoriesState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.categories = [];
        state.error = "Something went wrong....";
      }
    );
  },
});

export default categoriesSlice.reducer;
