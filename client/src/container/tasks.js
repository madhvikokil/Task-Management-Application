import React, { useEffect, useState } from 'react';
import {skipToken} from '@reduxjs/toolkit/query'
import './tasks.css';
import { useNavigate } from 'react-router-dom';
import { useAddTodoMutation, useGetATodoQuery, useUpdateTodoMutation } from '../redux/services/todoApi';
import { useParams } from 'react-router-dom';

function Tasks() {
    const params = useParams();
    const navigate = useNavigate();
    const [ updateTodo ] = useUpdateTodoMutation();
    const { data, isFetching, isSuccess } = useGetATodoQuery(params.id);
    const[ addTodo ] = useAddTodoMutation();
    const [ todo, setToDo ] = useState({ 
        title: isSuccess ? data && data.title : '',
        description: isSuccess ? data && data.description : '',
        status: isSuccess ? data && data.status : 'to-do',
        actualHours: isSuccess ? data && data.actualHours : '',
        budgetedHours:  isSuccess ? data && data.budgetedHours : ''
    })

    const changeHandler = (e) => {
        setToDo({ ...todo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo({...todo});
        navigate("/");
    }

    const updateHandler = (e) => {
        e.preventDefault();
        updateTodo({ id: params.id, ...todo });
        navigate("/");
    }
    return (
        <React.Fragment>
            <form className='form-class'>
        {/* {error && <b style={{ color: 'red' }}>Invalid username and password!</b>} */}
        <div>
          <label>Task Title</label>
          <input type="text" name="title" placeholder="Task Title" value={todo.title} onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
          <label>Task Description</label>
          <input type="text" name="description" placeholder="Task Description" value={todo.description} onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
        {/* <label for="status">Assigned to: </label>
        {<select name="user" id="user" onChange={(e) => changeHandler(e)}>
            <option value="">To Do</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>} */}
        <label for="status">Status </label>
        <select name="status" id="status" value={todo.status} onChange={(e) => changeHandler(e)}>
            <option value='to-do'>To Do</option>
            <option value="yet-to-start">Yet to Start</option>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">Completed</option>
        </select></div>
        <div>
          <label>Actual Hours(s)</label>
          <input type="text" name="actualHours" placeholder="Actual Hours" value={todo.actualHours} onChange={(e) => changeHandler(e)}/>
        </div><div class="form-group">

          <label>Budgeted Hour(s)</label>
          <input type="text" name="budgetedHours" placeholder="Budgeted Hours" value={todo.budgetedHours} onChange={(e) => changeHandler(e)}/>
        </div>
        {params.id ? <button onClick={(e) => updateHandler(e)}>update Task</button>: <button onClick={(e) => submitHandler(e)}>Add Task</button>}
      </form>
        </React.Fragment>
    )
}

export default Tasks;