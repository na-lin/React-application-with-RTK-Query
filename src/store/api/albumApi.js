import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(buidler) {
    return {
      fetchAlbums: buidler.query({
        // Route: /albums?userId=1
        query: (user) => {
          return {
            url: "/albums",
            method: "GET",
            params: {
              userId: user.id,
            },
          };
        },
      }),
    };
  },
});

export { albumApi };
export const { useFetchAlbumsQuery } = albumApi;
