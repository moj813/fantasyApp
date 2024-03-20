import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
  teamA: null,
  teamB: null,
  loading: false,
};

const matchSlice = createSlice({
  name: "match",
  initialState: initialState,

  reducers: {
    setTeams(state, value) {
        state.teams = value.payload;
        console.log(state.teams)
    },
    setTeamA(state, value) {
        state.teamA = value.payload;
    },
    setTeamB(state, value) {
        state.teamB = value.payload;
    },
   setLoading(state, value) {
        state.ground = value.payload;
    },
  },
});

export const { setTeamA , setTeamB , setTeams , setLoading } = matchSlice.actions;
export default matchSlice.reducer;

// const date = '2018-12-24';
// const time = '23:59:59';

// const dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format();
