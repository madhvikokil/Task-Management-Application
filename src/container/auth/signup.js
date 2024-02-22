// import React, { useState } from 'react'; 
// import { useSelector, useDispatch } from 'react-redux';
// import { loginUserType, loggedInUser, loginUserName, signup, isSignedUp, signupUser, login } from '../../feature/login/loginSlice';
// import { useNavigate } from "react-router-dom";
// // import data  from '../userData';
// import './login.css';
// import { app } from '../../firebaseConfig';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore"; 
// import {db} from '../../firebaseConfig';


// function Signup() {

//   const SIGNUP_MUTATION = gql`
//   mutation SignupMutation(
//     $email: String!
//     $password: String!
//     // $name: String!
//   ) {
//     signup(
//       email: $email
//       password: $password
//       // name: $name
//     ) {
//       token
//     }
//   }
// `;

// const [signup] = useMutation(SIGNUP_MUTATION, {
//   variables: {
//     // name: login.name,
//     email: login.email,
//     password: login.password
//   },
//   onCompleted: ({ signup }) => {
//     localStorage.setItem(AUTH_TOKEN, signup.token);
//     navigate('/');
//   }
// });
//   // const [ signup, setSignup ] = useState({ userName: '', password: '' });
//   const [ error, setError ] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const loginDetails = useSelector((state) => state.login);

//   const changeHandler = (e) => {
//     setSignup({ ...signup, [e.target.name]: e.target.value });
//   }

//   const auth = getAuth();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     let uid;
//     createUserWithEmailAndPassword(auth, signup.userName, signup.password)
//     .then((res) => {
//       console.log(res.user);
//       navigate('/');
//       uid = res.user.uid;
//     }).then(async () => {
//       const docRef = await addDoc(collection(db, "users"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//       });
//       console.log("Document written with ID: ", docRef.id);
//     }).catch((err) => {
//       console.log(err.message);
//     })
//   }

//   return (
//       <form className="form-class">
//         <label>Email Address</label>
//         <input type="text" name="userName" placeholder='User name' onChange={(e) => (changeHandler(e))} />
//         <label>Password</label>
//         <input type="text" name="password" placeholder='Password' onChange={(e) => (changeHandler(e))} />

//         <button onClick={(e) => submitHandler(e)}>Login</button>
//       </form>
//   );
// }

// export default Signup;