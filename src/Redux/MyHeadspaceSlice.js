import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFocus, getMeditawait, getMusic } from "../axios/axiosRequest";

export const fetchMeditateData = createAsyncThunk(
  "data/fetchMeditateData",
  async () => {
    const response = await getMeditawait();

    return response;
  }
);
export const fetchFocusData = createAsyncThunk(
  "data/fetchFocusData",
  async () => {
    const response = await getFocus();

    return response;
  }
);
export const fetchMusicData = createAsyncThunk(
  "data/fetchMusicData",
  async () => {
    const response = await getMusic();

    return response;
  }
);

const MyHeadspaceSlice = createSlice({
  name: "myHeadspace",
  initialState: {
    data: [],
    music: {
      isMusicPlayed: false,
      musicLink: "",
    },
    isLoggedIn: true,
    isSubscribed: false,
    loading: false,
    error: null,
  },
  reducers: {
    changeOption: (state, action) => {
      state.myStock = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    setMusic: (state, action) => {
      state.music = action.payload;

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
export const { changeOption, login ,setMusic} = MyHeadspaceSlice.actions;
