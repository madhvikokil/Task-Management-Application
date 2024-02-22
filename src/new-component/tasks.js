import React, { useState } from 'react';
import data  from '../userData';
import { useSelector, useDispatch } from 'react-redux';
import  { v4 as uuid } from "uuid";
import { doc, setDoc, collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebaseConfig';
import { useQuery, gql } from '@apollo/client';



// const usersCollectionRef = collection(db, 'todo');

function Tasks() {

    const [ task, settask ] = useState({ taskTitle: '', taskDescription: '', id: 0, status: 'to-do', user: '', actualHours: 0, hourBudgeted: 0 });
    const userData = useSelector((state) => state.login);
    

    const changeHandler = (e) => {
        settask({ ...task, [e.target.name]: e.target.value });
    }

  //   const mutation = gql`
  //   mutation addToDo($todoTitle: String!, $todoDescription: String!, $todoStatus: String!, $todoId: String!, $todoActualHours: String!, $todoBudgetedHours: String!) {
  //     toDo(todoTitle: $todoTitle, todoDescription: $todoDescription, todoStatus: $todoStatus, todoId: $todoId, todoActualHours: $todoActualHours, todoBudgetedHours: $todoBudgetedHours) {
  //       todoDataCollection {
  //         items {
  //           todoTitle
  //           todoDescription
  //           todoStatus
  //           todoId
  //           todoActualHours
  //           todoBudgetedHours
  //         }
  //       }
  //     }
  //   }
  // `;

//   todoDataCollection {
//     total
//     items {
//       todoTitle
//       todoDescription
//       todoStatus
//       todoId
//       todoActualHours
//       todoBudgetedHours
//     }
//   }
// }
    
const variables = task;
    
    const submitHandler = async (e) => {
      fetch('https://graphql.contentful.com/content/v1/spaces/dllfzwb3j45m/', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer LDtqgOYMb_MTxiMlsZrvE3Fco2aSwvZXGDtWPMfBGI8",
                    },
                    // body: JSON.stringify({ SIGNUP_MUTATION, variables }),
                  })
                    .then((response) => response.json())
                      .then(({ data, errors }) => {
                        if (errors) {
                          console.error(errors);
                        }
                        //  setTodo(data);
                        console.log("jhejed");
                      });
    }

    return(
        <form className='form-class'>
        {/* {error && <b style={{ color: 'red' }}>Invalid username and password!</b>} */}
        <div>
          <label>Task Title</label>
          <input type="text" name="taskTitle" placeholder="Task Title" onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
          <label>Task Description</label>
          <input type="text" name="taskDescription" placeholder="Task Description" onChange={(e) => changeHandler(e)}/>
        </div>
        <div>
        <label for="status">Assigned to: </label>
        {<select name="user" id="user" onChange={(e) => changeHandler(e)}>
            <option value="">To Do</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>}
        <label for="status">Status </label>
        <select name="status" id="status" onChange={(e) => changeHandler(e)}>
            <option value='to-do'>To Do</option>
            <option value="yet-to-start">Yet to Start</option>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="completed">Completed</option>
        </select></div>
        <div>
          <label>Actual Hours(s)</label>
          <input type="text" name="actualHours" placeholder="Actual Hours" onChange={(e) => changeHandler(e)}/>
        </div><div class="form-group">
          <label>Budgeted Hour(s)</label>
          <input type="text" name="hourBudgeted" placeholder="Budgeted Hours" onChange={(e) => changeHandler(e)}/>
        </div>
        <button onClick={(e) => submitHandler(e)}>Add Task</button>
      </form>
    )
}

export default Tasks;