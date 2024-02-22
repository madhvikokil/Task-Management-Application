// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loginUserType, loggedInUser, loginUserName, login, signin } from '../../feature/login/loginSlice';
// import { useNavigate } from "react-router-dom";
// // import data  from '../userData';
// import './login.css';
// import { useMutation, gql } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';
// import { AUTH_TOKEN } from '../constants';
// // import { app } from '../../firebaseConfig';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// function Login() {

//   const LOGIN_MUTATION = gql`
//   mutation LoginMutation(
//     $email: String!
//     $password: String!
//   ) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `;

// const [login] = useMutation(LOGIN_MUTATION, {
//   variables: {
//     email: formState.email,
//     password: formState.password
//   },
//   onCompleted: ({ login }) => {
//     localStorage.setItem(AUTH_TOKEN, login.token);
//     navigate('/');
//   }
// });

//   const [ login, setLogin ] = useState({ userName: '', password: '' });
//   const [ error, setError ] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const changeHandler = (e) => {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   }

//   const auth = getAuth();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, login.userName, login.password)
//             .then((res) => {
//                 localStorage.setItem('uid', res.user.uid);
//                 navigate("/dashboard");
//                 dispatch(loggedInUser(true));
//             }).catch((err) => {
//                 console.log("Err: ", err.message);
//             })
//   }

//   return (
//       <form class="form-class">
//         <label>Email Address</label>
//         <input type="text" name="userName" placeholder='User name' onChange={(e) => (changeHandler(e))} />
//         <label>Password</label>
//         <input type="text" name="password" placeholder='Password' onChange={(e) => (changeHandler(e))} />

//         <button onClick={(e) => submitHandler(e)}>Login</button>
//       </form>    
//   );
// }

// export default Login;