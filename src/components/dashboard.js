import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../userData';

function Dashboard() {
  const [ todoData, setToDoData ] = useState([]);
  const userData = useSelector((state) => state.login);

  useEffect(() => {
    if(userData.userType === 'iu') setToDoData(data.taskData.filter((d) => d.user === userData.username));
    else setToDoData(data.taskData);
  },[]);

  console.log(todoData);
    return(
        <React.Fragment>
            <p>Dashboard</p>
            
            
        </React.Fragment>

    )
}

export default Dashboard;