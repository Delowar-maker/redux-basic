import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",

    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
        }),
        getVideo: builder.query({
            query: (VideoId) => `/videos/${VideoId}`,
        }),
        // ?title_like=css&tile_like=lailwind&_limit=4 (build up query string)

        query: ({ id, title }) => {
            const tags = title.split(" "); // faka array paop
            const likes = tags.map((tag) => `title_like=${tag}`);
            const queryString = `/videos?${likes.join("&")}&_limit=4`;
            return queryString;
        },

    }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } = apiSlice;
