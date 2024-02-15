import React from 'react';
import Login from './components/login';
import { useSelector } from 'react-redux';


function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)

  console.log("Logged: ", isLoggedIn);
  return(

    <Login />
    // {isLoggedIn ? <ProtectedRoutes /> : }
  )
}

export default App;