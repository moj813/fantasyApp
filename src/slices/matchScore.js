import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "upComing",
  match:null,
  score:null,
  loading: false,
};

const matchScoreSlice = createSlice({
  name: "matchScore",
  initialState: initialState,

  reducers: {
    setStatus(state, value) {
      state.status = value.payload;
    },
    setMatch(state, value) {
      state.match = value.payload;
    },
    setScore(state, value) {
      state.score = value.payload;
    },
    setLoadingAtMatch(state, value) {
      state.ground = value.payload;
    },
  },
});

export const { setStatus, setLoadingAtMatch ,setMatch , setScore} = matchScoreSlice.actions;
export default matchScoreSlice.reducer;
