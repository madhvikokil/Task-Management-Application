import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { loginUserType, loggedInUser, loginUserName } from '../feature/login/loginSlice';
import { useNavigate } from "react-router-dom";
import data  from '../userData';
import './login.css';
import { app } from '../components/../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Login() {

  const [ login, setLogin ] = useState({ userName: '', password: '' });
  const [ error, setError ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const auth = getAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, login.userName, login.password)
    .then((res) => {
      console.log(res.user);
      navigate('/');
    }).catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <div className='form-class'>
      <form>
        {error && <b style={{ color: 'red' }}>Invalid username and password!</b>}
        <div class="form-group">
          <label>Email address</label>
          <input type="text" class="form-control" name="userName" aria-describedby="emailHelp" placeholder="Username" onChange={(e) => changeHandler(e)}/>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" name="password" placeholder="Password" onChange={(e) => changeHandler(e)}/>
        </div>
        <button class="btn btn-primary" onClick={(e) => submitHandler(e)}>Login</button>
      </form>
    </div>
  );
}

export default Login;