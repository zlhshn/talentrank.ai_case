import { configureStore } from '@reduxjs/toolkit';
import interviewReducer from './features/interviewSlice';

const store = configureStore({
  reducer: {
    interview: interviewReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;