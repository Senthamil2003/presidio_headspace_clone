import { createSlice } from "@reduxjs/toolkit";

const MusicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState: {
    isMusicPlayed: false,
    musicLink: "",
  },
  reducers: {
    setMusic: (state, action) => {
      state.music = action.payload;
    },
  },
});

export default MusicPlayerSlice.reducer;
export const {  setMusic } = MusicPlayerSlice.actions;
