import { useState, useContext } from 'react'

// Context
import { TodoContext } from '../context/GlobalContext'

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext)
  const [todoTitle, setTodoTitle] = useState('')
  const [todoBody, setTodoBody] = useState('')

  const newTodo = (e) => {
    e.preventDefault()

    addTodo({
      id: Math.floor(Math.random() * 1000000),
      title: todoTitle,
      body: todoBody,
      isCompleted: false
    })

    setTodoTitle('')
    setTodoBody('')
  }

  return (
    <div className='todo-input'>
      <input name='todo-title' autoComplete='off' spellCheck='false' autoCorrect='off' placeholder='Enter your plans here...' value={ todoTitle } onChange={ (e) => setTodoTitle(e.target.value) } className='clickable' />
      <textarea name='todo-body' className='clickable' placeholder='Describe your plans here...' value={ todoBody } onChange={ (e) => setTodoBody(e.target.value) } >
      </textarea>
      <button className='clickable' onClick={ (e) => newTodo(e) }>
        Add
      </button>
    </div>
  )
}

export default TodoInput