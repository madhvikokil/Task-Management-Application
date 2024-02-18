const userLoginData = [
    { userName: "test1", password: "Password1", userType: "iu" },
    { userName: "test2", password: "Password1", userType: "iu" },
    { userName: "test3", password: "Password1", userType: "iu" },
    { userName: "admin", password: "Password1", userType: "admin" },
]

const taskData = [
    { id: 1, taskTitle: 'Title 1', taskDescription: 'Description 1', user: 'test1', status: 'to-do' },
    { id: 2, taskTitle: 'Title 2', taskDescription: 'Description 2', user: 'test1', status: 'completed' },
    { id: 3, taskTitle: 'Title 3', taskDescription: 'Description 3', user: 'test2', status: 'to-do' },
    { id: 4, taskTitle: 'Title 4', taskDescription: 'Description 4', user: 'test2', status: 'to-do' },
    { id: 5, taskTitle: 'Title 5', taskDescription: 'Description 5', user: 'test3', status: 'completed' },
    { id: 6, taskTitle: 'Title 6', taskDescription: 'Description 6', user: 'test3', status: 'in-progress' },
    { id: 7, taskTitle: 'Title 7', taskDescription: 'Description 7', user: 'test3', status: 'on-hold' },
]

export default {
    userLoginData: userLoginData,
    taskData: taskData
}