import { createContext, useReducer } from 'react'
import ContextReducer from './ContextReducer'

import axios from 'axios'

// Initial list of todos
const todo_init = []

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, todo_init)

  const getTodos = async () => {
    try {
      const todos = await axios.get('http://127.0.0.1:8000/api/v1/')

      dispatch({
        type: 'NEW',
        payload: todos.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  const addTodo = async (todo) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/', todo)

      dispatch({
        type: 'ADD',
        payload: todo
      })
    } catch (err) {
      console.log(err)
    }
  }

  const removeTodo = async (todo_id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/remove/${todo_id}`)

      dispatch({
        type: 'REMOVE',
        payload: todo_id
      })
    } catch (err) {
      console.log(err)
    }
  }

  const updateTodo = async (todo) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/v1/${todo.id}`, todo)

      dispatch({
        type: 'UPDATE',
        payload: todo
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <TodoContext.Provider value={ { todoList: state, getTodos, addTodo, removeTodo, updateTodo } } >
      { children }
    </TodoContext.Provider>
  )
}