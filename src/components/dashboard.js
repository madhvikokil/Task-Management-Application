import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHandler, deleteHandler } from '../feature/login/todoSlice';
import data from '../userData';
import { useNavigate } from 'react-router';
import { client } from '../client';
import { useQuery, get } from '@apollo/client';

function Dashboard() {
  const [ todoData, setToDoData ] = useState([]);
  const userData = useSelector((state) => state.login);
  const toDo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(userData.userType === 'iu') {dispatch(addHandler(data.taskData.filter((d) => d.user === userData.username)));}
  //   else {dispatch(addHandler(data.taskData));}
  // },[]);

  const deleteTasks = (e, id) => {
    e.preventDefault();
    dispatch(deleteHandler(id));
  }



  const routeToTasks = () => {
    navigate('/tasks');
  }

  return (
    <React.Fragment>
      <button onClick={() => routeToTasks()}>+ Add Tasks</button>
    </React.Fragment>
  )
    // return(
    //     <React.Fragment> 
    //       <button type="button" class="btn btn-primary" style={{ marginLeft: '10px' }} onClick={() => routeToTasks()}>+ Add Task</button>
    //     <div class="grid-container">
    //       <div><h4 style={{ backgroundColor: 'orange'}}>To-do</h4>
    //       {toDo.todoList.map((d) => {
    //         if(d.status === 'to-do') {
    //           return (<div class="card item1" style={{ width: 'auto' }} id={d.id}>
    //           <div class="card-body">
    //             <h5 class="card-title">{d.taskTitle}</h5>
    //             {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //             <p class="card-text">{d.taskDescription}</p>
    //             <button type="button" class="btn btn-primary" >Edit</button>
    //             <button type="button" class="btn btn-danger" onClick={(e, id) => deleteTasks(e, d.id)}>Delete</button>
    //           </div>
    //         </div>)
    //         }}
    //       )}
    //       </div>
    //       <div><h4 style={{ backgroundColor: 'olive'}}>Yet to Start</h4>
    //       {toDo.todoList.map((d) => {
    //         if(d.status === 'yet-to-start') {
    //           return (<div class="card item1" style={{ width: 'auto' }} id={d.id}>
    //           <div class="card-body">
    //             <h5 class="card-title">{d.taskTitle}</h5>
    //             {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //             <p class="card-text">{d.taskDescription}</p>
    //             <button type="button" class="btn btn-primary" >Edit</button>
    //             <button type="button" class="btn btn-danger" onClick={(e) => deleteTasks(e, d.id)}>Delete</button>
    //           </div>
    //         </div>)
    //         }}
    //       )}
    //       </div>

    //       <div><h4 style={{ backgroundColor: 'purple'}}>In-Progress</h4>
    //       {toDo.todoList.map((d) => {
    //         if(d.status === 'in-progress') {
    //           return (<div class="card item1" style={{ width: 'auto' }} id={d.id}>
    //           <div class="card-body">
    //             <h5 class="card-title">{d.taskTitle}</h5>
    //             {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //             <p class="card-text">{d.taskDescription}</p>
    //             <button type="button" class="btn btn-primary" >Edit</button>
    //             <button type="button" class="btn btn-danger" onClick={(e) => deleteTasks(e, d.id)}>Delete</button>
    //           </div>
    //         </div>)
    //         }}
    //       )}
    //       </div>

    //       <div><h4 style={{ backgroundColor: 'pink'}}>On-Hold</h4>
    //       {toDo.todoList.map((d) => {
    //         if(d.status === 'on-hold') {
    //           return (<div class="card item1" style={{ width: 'auto' }} id={d.id}>
    //           <div class="card-body">
    //             <h5 class="card-title">{d.taskTitle}</h5>
    //             {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //             <p class="card-text">{d.taskDescription}</p>
    //             <button type="button" class="btn btn-primary" >Edit</button>
    //             <button type="button" class="btn btn-danger" onClick={(e) => deleteTasks(e, d.id)}>Delete</button>
    //           </div>
    //         </div>)
    //         }}
    //       )}
    //       </div>

    //       <div><h4 style={{ backgroundColor: 'greenyellow'}}>Completed</h4>
    //       {toDo.todoList.map((d) => {
    //         if(d.status === 'completed') {
    //           return (<div class="card item1" style={{ width: 'auto' }} id={d.id}>
    //           <div class="card-body">
    //             <h5 class="card-title">{d.taskTitle}</h5>
    //             {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    //             <p class="card-text">{d.taskDescription}</p>
    //             <button type="button" class="btn btn-primary" >Edit</button>
    //             <button type="button" class="btn btn-danger" onClick={(e) => dispatch(deleteTasks(e, d.id))}>Delete</button>
    //           </div>
    //         </div>)
    //         }}
    //       )}
    //       </div>         
    //     </div>
    //     </React.Fragment>

    // )


    return (
      <p>hello</p>
    )
}

export default Dashboard;