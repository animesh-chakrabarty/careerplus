import { createSlice } from "@reduxjs/toolkit";

const JobListSlice = createSlice({
  name: "jobList",
  initialState: {
    data: [],
  },
  reducers: {
    setJobList: (state, action) => {
      state.data = action.payload;
    },
    setMoreJobs: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export default JobListSlice.reducer;
export const { setJobList, setMoreJobs } = JobListSlice.actions;
