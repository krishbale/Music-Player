"use client"
import {  createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const rapidapiApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com/',
        
        prepareHeaders: (headers) => {
            headers.set( 'X-RapidAPI-Key', 'c91fb6419emshba5ce137000923dp146f26jsn77938233d840');
            headers.set('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
            return headers;
        },
       
    }),
    endpoints:
      (builder)=>({
        getLatestAlbum: builder.query({ query:(searchTerm) => `search/?q=${searchTerm}&type=multi&offset=0&limit=10&numberofTopResults=5`}),
        getSearchAlbum: builder.query({ query:(searchTerm) => `search/?q=${searchTerm}&type=&offset=0&limit=20`}),
        getAlbum: builder.query({ query:(ids) => `albums/?ids=${ids}`}),

      }),
    }
);

export const { useGetLatestAlbumQuery,useGetSearchAlbumQuery,useGetAlbumQuery } = rapidapiApi;

