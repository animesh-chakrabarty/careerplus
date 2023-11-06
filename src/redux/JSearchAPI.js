import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "7f78384275msh3e1b33fcf8c3353p18d011jsn5fc80b4c10b4";

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
