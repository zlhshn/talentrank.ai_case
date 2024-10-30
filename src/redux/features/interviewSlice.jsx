import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    jobData: [],
  },
  reducers: {
    setInterviewData: (state, action) => {
      state.jobData = action.payload; // Tek seferde güncelleme
    },
  },
});

export const { setInterviewData } = interviewSlice.actions;

export default interviewSlice.reducer;
