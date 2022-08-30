import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesURL } from "../constants/app-config.constants";

export const getCategories = createAsyncThunk(
    "devices/getCategories",
    async () => {
      return fetch(
        CategoriesURL,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
          },
        }
      ).then((res) => res.json().then((data) => data.categories));
    }
  );
  