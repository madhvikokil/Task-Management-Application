import React from 'react';
// import Login from './container/auth/';
// import Signup from './container/auth/signup';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
// // import Dashboard from './components/dashboard';
// import Report  from './components/report';
import Header from './components/header';
// import Tasks from './components/tasks';
// import Check from './components/check';
import Dashboard from './new-component/dashboard';
import Tasks from './new-component/tasks';

function App() {
return (
  <>
      <Header />
      {/* {isLoggedIn ?  */}
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />

      </Routes>

        {/* <Routes>
          <Route path="/dashboard" element={<Check />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/tasks/:id" element={<Tasks />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes> 

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
  
    </>
)
}

export default App;
    


// export default App;