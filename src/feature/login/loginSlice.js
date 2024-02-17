import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: '',
    username: '',
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUserType: (state, action) => {
            state.userType =  action.payload
        },

        loggedInUser: (state, action) => {
            state.isLoggedIn = action.payload
        },

        loginUserName: (state, action) => {
            state.username = action.payload;
        }

    }
})

export const { loginUserType, loggedInUser, loginUserName } = loginSlice.actions;
export default loginSlice.reducer;