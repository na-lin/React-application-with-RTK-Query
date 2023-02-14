import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from "./api/userApi";
import { albumApi } from "./api/albumApi";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(albumApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;

export { useFetchUsersQuery } from "./api/userApi";
export { useFetchAlbumsQuery } from "./api/albumApi";
