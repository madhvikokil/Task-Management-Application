import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constant';

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    tagTypes: ['get'],
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => 'get',
            providesTags: ['Get']
        }),
        getATodo: builder.query({
            query: (id) => `get/${id}`,
            providesTags: ['Get']

        }),
        addTodo: builder.mutation({
            query: todo => ({
                url: '/saved',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Get']
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `update/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Get']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Get']
        }),
    }),
})

export const { useGetTodoQuery, useGetATodoQuery, useAddTodoMutation, useUpdateTodoMutation,  useDeleteTodoMutation } = todoApi;