import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router';
import { useGetTodoQuery, useDeleteTodoMutation } from '../redux/services/todoApi';
import Tasks from './tasks';

function Dashboard() {
    const { data } = useGetTodoQuery();
    const [ deleteTodo ] = useDeleteTodoMutation();
    const navigate = useNavigate();

    const deletehandler = (e, id) => {
      deleteTodo(id);
    }

    const redirectToEditPage = (e, id) => {
      navigate(`/tasks/${id}`);
    }

    const redirectToAddPage = () => {
      navigate('/tasks');
    }

    return (
      <>
      <button onClick={() => redirectToAddPage()}>+ Add Tasks</button>
        <div class="grid-container">
           <div><h4 style={{ backgroundColor: 'orange'}}>To-do</h4>
           {data && data.map((d) => {
             if(d.status === 'to-do') {
               return (<div class="card item1" style={{ width: 'auto' }} key={d._id}>
               <div class="card-body">
                 <h5 class="card-title">{d.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 <p class="card-text">{d.description}</p>
                 <button type="button" class="btn btn-primary" onClick={(e, id) => redirectToEditPage(e, d._id)}>Edit</button>
                 <button type="button" class="btn btn-danger" onClick={(e, id) => deletehandler(e, d._id)}>Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>
           <div><h4 style={{ backgroundColor: 'olive'}}>Yet to Start</h4>
           {data && data.map((d) => {
             if(d.status === 'yet-to-start') {
               return (<div class="card item1" style={{ width: 'auto' }} key={d._id}>
               <div class="card-body">
                 <h5 class="card-title">{d.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 <p class="card-text">{d.description}</p>
                 <button type="button" class="btn btn-primary" onClick={(e, id) => redirectToEditPage(e, d._id)}>Edit</button>
                 <button type="button" class="btn btn-danger" onClick={(e, id) => deletehandler(e, d._id)}>Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'purple'}}>In-Progress</h4>
           {data && data.map((d) => {
             if(d.status === 'in-progress') {
               return (<div class="card item1" style={{ width: 'auto' }} key={d._id}>
               <div class="card-body">
                 <h5 class="card-title">{d.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 <p class="card-text">{d.description}</p>
                 <button type="button" class="btn btn-primary" onClick={(e, id) => redirectToEditPage(e, d._id)}>Edit</button>
                 <button type="button" class="btn btn-danger" onClick={(e, id) => deletehandler(e, d._id)}>Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'pink'}}>On-Hold</h4>
           {data && data.map((d) => {
             if(d.status === 'on-hold') {
               return (<div class="card item1" style={{ width: 'auto' }} key={d._id}>
               <div class="card-body">
                 <h5 class="card-title">{d.title}</h5>
                 {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                 <p class="card-text">{d.description}</p>
                 <button type="button" class="btn btn-primary" onClick={(e, id) => redirectToEditPage(e, d._id)}>Edit</button>
                 <button type="button" class="btn btn-danger" onClick={(e, id) => deletehandler(e, d._id)}>Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'greenyellow'}}>Completed</h4>
           {data && data.map((d) => {
             if(d.status === 'completed') {
               return (<div class="card item1" style={{ width: 'auto' }} key={d._id}>
               <div class="card-body">
                 <h5 class="card-title">{d.title}</h5>
                 {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                 <p class="card-text">{d.description}</p>
                 <button type="button" class="btn btn-primary" onClick={(e, id) => redirectToEditPage(e, d._id)}>Edit</button>
                 <button type="button" class="btn btn-danger" onClick={(e, id) => deletehandler(e, d._id)}>Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>         
         </div>
         </>
    )
}

export default Dashboard;