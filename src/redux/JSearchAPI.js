import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "dcd2bcd14emshff3e79ab3b1fcdcp14b8b5jsn9959db0a0934";

const JSearchAPIBaseQuery = fetchBaseQuery({
  baseUrl: "https://jsearch.p.rapidapi.com/",
  prepareHeaders: (headers) => {
    headers.set("X-RapidAPI-Key", apiKey);
    headers.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");
    return headers;
  },
});

const JSearchAPI = createApi({
  baseQuery: JSearchAPIBaseQuery,
  endpoints: (builder) => ({
    fetchJobs: builder.query({
      query: ({jobRole,num_pages}) => `search?query=${jobRole}&page=${num_pages}&num_pages=1`,
    }),
  }),
});

export const { useFetchJobsQuery ,useLazyFetchJobsQuery } = JSearchAPI;

export default JSearchAPI;
