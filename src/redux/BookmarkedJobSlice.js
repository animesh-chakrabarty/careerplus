import { createSlice } from "@reduxjs/toolkit";

const BookmarkedJobSlice = createSlice({
  name: "bookmarkedJobs",
  initialState: {
    data: [],
  },
  reducers: {
    setBookmark: (state, action) => {
      // const updatedData = [...state.data, action.payload];
      state.data = action.payload.bookmarkedJobs;
    },
  },
});

export default BookmarkedJobSlice.reducer;
export const { setBookmark } = BookmarkedJobSlice.actions;
