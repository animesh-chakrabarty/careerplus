import { createSlice } from "@reduxjs/toolkit";

const JobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState: {
    data: {},
  },
  reducers: {
    setJobdetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default JobDetailsSlice.reducer;
export const { setJobdetails } = JobDetailsSlice.actions;
