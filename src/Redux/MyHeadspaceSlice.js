import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMeditateData = createAsyncThunk(
  "data/fetchMeditateData",
  async () => {
    const response = await axios.get("http://localhost:5000/meditate");
    return response.data;
  }
);
export const fetchFocusData = createAsyncThunk(
  "data/fetchFocusData",
  async () => {
    const response = await axios.get("http://localhost:5000/focus");
    return response.data;
  }
);

const MyHeadspaceSlice = createSlice({
  name: "myHeadspace",
  initialState: {
    data: [],
    state: "meditate",
    loading: false,
    error: null,
  },
  reducers: {
    changeOption: (state, action) => {
      state.myStock = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeditateData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeditateData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMeditateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFocusData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFocusData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFocusData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default MyHeadspaceSlice.reducer;
export const { changeOption } = MyHeadspaceSlice.actions;
