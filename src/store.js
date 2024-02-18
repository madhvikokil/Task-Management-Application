import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './feature/login/loginSlice';
import todoReducer from "./feature/login/todoSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        todo: todoReducer,
    }
})