import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(buidler) {
    return {
      fetch,
    };
  },
});
