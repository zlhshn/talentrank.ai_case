import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    jobData: [],
  },
  reducers: {
    setJobData: (state, action) => {
      state.jobData = action.payload; 
    },
    addJob: (state, action) => {
      // Yeni bir iş ekler
      state.jobData.push({ ...action.payload, questions: [] });
    },
    addQuestionToJob: (state, action) => {
      const { jobId, question } = action.payload;
      const job = state.jobData.find((job) => job.id === jobId);
      if (job) {
        job.questions.push(question);
      }
    },
  },
});

export const { setJobData, addJob, addQuestionToJob } = interviewSlice.actions;

export default interviewSlice.reducer;
