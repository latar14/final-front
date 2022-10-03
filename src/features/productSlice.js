import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const fetchProduct = createAsyncThunk(
  "fetch/product",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/Product");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
  },
});

export default productSlice.reducer;