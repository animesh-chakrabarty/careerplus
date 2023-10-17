import { configureStore } from "@reduxjs/toolkit";
import JobDetailsReducer from "./JobDetailsSlice";

const store = configureStore({
  reducer: {
    jobDetails: JobDetailsReducer,
  },
});

export default store;
