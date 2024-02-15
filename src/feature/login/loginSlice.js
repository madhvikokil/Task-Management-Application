import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userType: '',
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
        }

    }
})

export const { loginUserType, loggedInUser } = loginSlice.actions;
export default loginSlice.reducer;