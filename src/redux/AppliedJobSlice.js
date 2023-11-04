import { createSlice } from "@reduxjs/toolkit";

const AppliedJobSlice = createSlice({
  name: "appliedJobs",
  initialState: {
    data: [],
  },
  reducers: {
    setAppliedJobs: (state, action) => {
      // const updatedData = [...state.data, action.payload];
      state.data = action.payload.appliedJobs;
    },
  },
});

export default AppliedJobSlice.reducer;
export const { setAppliedJobs } = AppliedJobSlice.actions;
