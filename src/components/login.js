import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { loginUserType, loggedInUser, loginUserName } from '../feature/login/loginSlice';
import { useNavigate } from "react-router-dom";
import data  from '../userData';
import './login.css';

function Login() {

  const [ login, setLogin ] = useState({ userName: '', password: '' });
  const [ error, setError ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setLogin(login);
    const checkedData = data.userLoginData.find((data) => data.userName === login.userName && data.password === login.password);
    if(checkedData && checkedData.userType === 'admin') {
      // setError(false);
      dispatch(loginUserType('admin'));
      dispatch(loggedInUser(true));
      dispatch(loginUserName(login.userName));
      navigate('/dashboard');
    }
    else if(checkedData && checkedData.userType === 'iu') {
      dispatch(loginUserType('iu'));
      dispatch(loggedInUser(true));
      dispatch(loginUserName(login.userName));
      navigate('/dashboard');

    } else {
        setError(true);
    }
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