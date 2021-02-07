export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAIL = "UPDATE_TODO_FAIL";



export const addTodo = (data) => ({
  type:ADD_TODO_REQUEST,
  data
})

export const deleteTodo = (data) => ({
  type:DELETE_TODO_REQUEST,
  data
})

export const updateTodo = (data) => ({
  type:UPDATE_TODO_REQUEST,
  data
})