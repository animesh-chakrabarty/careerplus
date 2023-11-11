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
      console.log(action.payload);
      const temp = [...state.data, ...action.payload];
      state.data = temp;
    },
  },
});

export default JobListSlice.reducer;
export const { setJobList, setMoreJobs } = JobListSlice.actions;
