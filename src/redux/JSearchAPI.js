import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "d9876a4f76msh10ba7255fb01747p131df4jsn451e1887aa18";

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
      query: (jobRole) => `search?query=${jobRole}&page=1&num_pages=4`,
    }),
  }),
});

export const { useFetchJobsQuery } = JSearchAPI;

export default JSearchAPI;
