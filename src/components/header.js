import React from 'react';
import './header.css';
import { loginUserType, loggedInUser, loginUserName } from '../feature/login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Header() {
    const userData = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggedOutUser = () => {
        dispatch(loggedInUser(false));
        navigate('/');
    }
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div class="flex-container">
                {userData.isLoggedIn && <button onClick={() => loggedOutUser(false)}>Logout</button>}
            </div>
        </nav>
    )
}

export default Header;