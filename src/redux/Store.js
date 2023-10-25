import { configureStore } from "@reduxjs/toolkit";
import JobDetailsReducer from "./JobDetailsSlice";
import BookmarksReducer from "./BookmarkedJobSlice";

const store = configureStore({
  reducer: {
    jobDetails: JobDetailsReducer,
    bookmarkedJobs: BookmarksReducer,
  },
});

export default store;
