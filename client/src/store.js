import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./redux/services/todoApi";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)