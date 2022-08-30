import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProductsURL } from "../constants/app-config.constants";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      return fetch(FetchProductsURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
        },
      }).then((res) => res.json().then((data) => data.products));
    }
  );
  
  export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (id: any) => {
      return fetch(
        `${FetchProductsURL}/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        }
      ).then((res) => res.json());
    }
  );