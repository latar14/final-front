import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

export const signInThunk = createAsyncThunk(
  "signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);

      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signInThunk.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(signInThunk.rejected, (state, action) => {
          state.error = action.payload
          state.loading = false
        })
        .addCase(signInThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null
          state.token = action.payload.token;
          state.id = action.payload.id;
        });
    },
  });

  export default applicationSlice.reducer;

  
