import React, { useEffect, useState } from 'react';
import { client} from '../client';
import { useQuery, gql } from '@apollo/client';

function Check() {

    const [ todo, setTodo ] = useState({});
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
        fetch('https://graphql.contentful.com/content/v1/spaces/dllfzwb3j45m/', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer LDtqgOYMb_MTxiMlsZrvE3Fco2aSwvZXGDtWPMfBGI8",
                    },
                    // query: `{{ query }}`, 
                    body: JSON.stringify({ query }),
                    
                    // request: JSON.stringify({ query }),
                })
                    .then((response) => response.json())
                      .then(({ data, errors }) => {
                        if (errors) {
                          console.error(errors);
                        }
                         setTodo(data);
                        console.log(data.todoDataCollection);
                      });
    }, []);
    // console.log("Data: ", data);
    return (
        <React.Fragment>
        <p>Hello</p>
        {/* {loading ? <h3>Loading Data</h3> : 
        data.todoDataCollection.items.map((todo) => <p>{todo.todoTitle}</p>)} */}
        </React.Fragment>
    )
}

export default Check;