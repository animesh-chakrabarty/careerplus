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
  },
});

export default JobListSlice.reducer;
export const { setJobList } = JobListSlice.actions;
