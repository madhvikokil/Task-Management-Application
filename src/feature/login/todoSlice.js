import { createSlice } from "@reduxjs/toolkit";
import data from '../../userData';

const initialState = {
    todoList: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addHandler: (state, action) => {
            state.todoList =  action.payload
        },

        deleteHandler: (state, action) => {
            let updatdedData = state.todoList.filter((arrow) => arrow.id !== action.payload);
            state.todoList = updatdedData;
        }

    }
})

export const { addHandler, deleteHandler } = todoSlice.actions;
export default todoSlice.reducer;