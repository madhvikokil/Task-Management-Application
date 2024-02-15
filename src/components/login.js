import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { loginUserType, loggedInUser } from '../feature/login/loginSlice';
import  data from '../constants/userLogin';

function Login() {

  const [ login, setLogin ] = useState({ userName: '', password: '' });
  const [ error, setError ] = useState(false);
  const userType = useSelector((state) => state.login.userType)
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const submitHandler = () => {
    setLogin(login);
    const checkedData = data.userLoginData.find((data) => data.userName === login.userName && data.password === login.password);
    if(checkedData.userType === 'admin') {
        setError(false);

      dispatch(loginUserType('admin'));
      dispatch(loggedInUser(true));
    }
    else if(checkedData.userType === 'iu') {
      dispatch(loginUserType('iu'));
      dispatch(loggedInUser(true));
      setError(false);

    } else {
        setError(true);
    }
  }

  return (
    <div className="App">
        <input type="text" name="userName" placeholder="User name" value={login.userName} onChange={(e) => changeHandler(e)} />
        <input type="text" name="password" placeholder="Password" value={login.password} onChange={(e) => changeHandler(e)} />
        <button type="submit" onClick={() => submitHandler()}>Login</button>
    </div>
  );
}

export default Login;