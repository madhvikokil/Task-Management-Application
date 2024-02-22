import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router';

function Check() {

    const navigate = useNavigate();
    const [ todo, setTodo ] = useState([]);
    const query = `{
        todoDataCollection {
          total
          items {
            todoTitle
            todoDescription
            todoStatus
            todoId
            todoActualHours
            todoBudgetedHours
          }
        }
      }
`;
    useEffect(() => {
        fetch('https:graphql.contentful.com/content/v1/spaces/dllfzwb3j45m/', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer LDtqgOYMb_MTxiMlsZrvE3Fco2aSwvZXGDtWPMfBGI8",
                    },
                    body: JSON.stringify({ query }),
                    
                     request: JSON.stringify({ query }),
                })
                    .then((response) => response.json())
                      .then(({ data, errors, loading }) => {
                        if (errors) {
                          console.error(errors);
                        } else {
                            setTodo(data.todoDataCollection.items);
                            console.log("Data: ", todo);
                        }
                      });
    }, []);

    const routeToTasks = () => {
        navigate('/tasks');
    }
    return (
        <React.Fragment> 
           <button type="button" class="btn btn-primary" style={{ marginLeft: '10px' }} onClick={() => routeToTasks()}>+ Add Task</button>
         <div class="grid-container">
           <div><h4 style={{ backgroundColor: 'orange'}}>To-do</h4>
           {todo.map((d) => {
             if(d.todoStatus === 'to-do') {
               return (<div class="card item1" style={{ width: 'auto' }} id={d.todoId}>
               <div class="card-body">
                 <h5 class="card-title">{d.todoTitle}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 <p class="card-text">{d.todoDescription}</p>
                 {/* <button type="button" class="btn btn-primary" >Edit</button>
                 <button type="button" class="btn btn-danger">Delete</button> */}
               </div>
             </div>)
             }}
           )}
           </div>
           <div><h4 style={{ backgroundColor: 'olive'}}>Yet to Start</h4>
           {todo.map((d) => {
             if(d.todoStatus === 'yet-to-start') {
               return (<div class="card">
               <h1>{d.todoTitle}</h1>
               <p class="price">$19.99</p>
               <p>{d.todoDescription}</p>
               <p><button>Add to Cart</button></p>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'purple'}}>In-Progress</h4>
           {todo.map((d) => {
             if(d.todoStatus === 'in-progress') {
               return (<div class="card item1" style={{ width: 'auto' }} id={d.todoId}>
               <div class="card-body">
                 <h5 class="card-title">{d.todoTitle}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 <p class="card-text">{d.todoDescription}</p>
                 {/* <button type="button" class="btn btn-primary" >Edit</button>
                 <button type="button" class="btn btn-danger">Delete</button> */}
               </div>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'pink'}}>On-Hold</h4>
           {todo.map((d) => {
             if(d.todoStatus === 'on-hold') {
               return (<div class="card item1" style={{ width: 'auto' }} id={d.todoId}>
               <div class="card-body">
                 <h5 class="card-title">{d.todoTitle}</h5>
                 {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                 <p class="card-text">{d.todoDescription}</p>
                 <button type="button" class="btn btn-primary" >Edit</button>
                 <button type="button" class="btn btn-danger">Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>

           <div><h4 style={{ backgroundColor: 'greenyellow'}}>Completed</h4>
           {todo.map((d) => {
             if(d.todoStatus === 'completed') {
               return (<div class="card item1" style={{ width: 'auto' }} id={d.todoId}>
               <div class="card-body">
                 <h5 class="card-title">{d.todoTitle}</h5>
                 {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                 <p class="card-text">{d.todoDescription}</p>
                 <button type="button" class="btn btn-primary" >Edit</button>
                 <button type="button" class="btn btn-danger">Delete</button>
               </div>
             </div>)
             }}
           )}
           </div>         
         </div>
         </React.Fragment>
    )
}

export default Check;