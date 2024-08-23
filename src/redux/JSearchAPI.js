import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_JSEARCH_API_KEY

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
      query: ({jobRole,page}) => `search?query=${jobRole}&page=${page}&num_pages=1`,
    }),
  }),
});

export const { useFetchJobsQuery ,useLazyFetchJobsQuery } = JSearchAPI;

export default JSearchAPI;
