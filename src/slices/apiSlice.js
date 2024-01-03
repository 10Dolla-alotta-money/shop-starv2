import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants.js'

const baseQuery = fetchBaseQuery({ baseUrl: "https://shop-star-v2-backend.vercel.app/" });

export const apiSlice = createApi({
    baseQuery,
    credentials: "include",
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({}),

})