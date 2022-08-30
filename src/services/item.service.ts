import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddProductURL } from "../constants/app-config.constants";

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (values: any) => {
      return fetch(AddProductURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());
    }
  );
  