import { createSlice } from "@reduxjs/toolkit";

const JobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState: {},
  reducers: {
    setJobdetails: (state, action) => {
      //   console.log(action.payload);
      state = action.payload;
      console.log(state);
    },
  },
});

export default JobDetailsSlice.reducer;
export const { setJobdetails } = JobDetailsSlice.actions;
