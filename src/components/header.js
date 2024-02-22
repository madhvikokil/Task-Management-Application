import React from 'react';
import './header.css';
import { loginUserType, loggedInUser, loginUserName, user } from '../feature/login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAuth, signOut } from "firebase/auth";


function Header() {
    // const userData = useSelector((state) => state.login);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const auth = getAuth();
    // const loggedOutUser = () => {
    //     signOut(auth).then(() => {
    //         localStorage.removeItem("uid");
    //         dispatch(loggedInUser(false));
    //         navigate('/');
    //     }).catch((error) => {
    //     console.log("Error: ", error);
    //     });
    // }
    return(
        <div className='header'>
            <div className='header-items'></div>
            
        </div>
        // <nav class="navbar navbar-dark bg-primary">
        //     <div class="flex-container">
        //     {userData.isLoggedIn ?  
        //         <button onClick={() => loggedOutUser(false)}>Logout</button> :
        //         <button onClick={() => navigate('/signup')}>Sign Up</button>}
        //     </div>
        // </nav>
    )
}

export default Header;