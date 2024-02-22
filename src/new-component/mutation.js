mutation AddToDo($todoTitle: String!, $todoDescription: String!, $todoStatus: String!, $todoId: String!, $todoActualHours: String!, $todoBudgetedHours: String!) {
    addToDo(data: {
          todoTitle
          todoDescription
          todoStatus
          todoId
          todoActualHours
          todoBudgetedHours
      }
    })