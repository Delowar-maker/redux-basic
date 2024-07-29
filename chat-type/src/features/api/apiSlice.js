import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseURL: process.env.REACT_APP_API_URL,
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
})