import { createSlice } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// export const loginuser = createAsyncThunk();
const initialState = {
    userType: '',
    username: '',
    isLoggedIn: false,
    user: null,
    isSignedUp: false
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
        },

        signout: (state, action) => {
            signOut().then(() => {
                state.user = null;
                localStorage.removeItem("uid");
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            console.log("Error: ", error);
            });
        }

    }
})

export const { loginUserType, loggedInUser, loginUserName, login, signin, signout, signupUser } = loginSlice.actions;
export default loginSlice.reducer;