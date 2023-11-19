import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface QueryArgs {
  limit: number;
  page: number;
  search: string;
}

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], QueryArgs>({
      query: ({ limit, page, search }) => ({
        url: "/users",
        params: {
          _limit: limit,
          _page: page,
          _search: search,
        },
      }),
    }),
    fetchUserById: build.query<IUser, number>({
      query: (id: number) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
});
