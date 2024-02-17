import React from 'react';
import Login from './components/login';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Dashboard from './components/dashboard';
import Report  from './components/report';
import Header from './components/header';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)

  return(
    <>
      <Header />
      {isLoggedIn ? 
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Report />} />
        </Routes> : 

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      }
    </>

  )
}

export default App;