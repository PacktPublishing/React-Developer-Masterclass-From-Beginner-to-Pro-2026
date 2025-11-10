import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersAPI;
