import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(buidler) {
    return {
      fetchAlbums: buidler.query({
        providesTags: (result, error, arg) => {
          return [{ type: "Album", id: arg.id }];
        },
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
      addAlbums: buidler.mutation({
        invalidatesTags: (result, error, arg) => {
          return [{ type: "Album", id: arg.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
    };
  },
});

export { albumApi };
export const { useFetchAlbumsQuery, useAddAlbumsMutation } = albumApi;
