import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import JobDetailsReducer from "./JobDetailsSlice";
import BookmarksReducer from "./BookmarkedJobSlice";
import JSearchAPI from "./JSearchAPI";
import JobListReducer from "./JobListSlice";

const store = configureStore({
  reducer: {
    jobDetails: JobDetailsReducer,
    bookmarkedJobs: BookmarksReducer,
    [JSearchAPI.reducerPath]: JSearchAPI.reducer,
    jobList: JobListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JSearchAPI.middleware),
});

export default store;
