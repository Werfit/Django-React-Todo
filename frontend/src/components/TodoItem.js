import { useState, useContext } from 'react'

// Context
import { TodoContext } from '../context/GlobalContext'

const TodoItem = ({ todo }) => {
  const { id, title, body, isCompleted } = todo

  const { removeTodo, updateTodo } = useContext(TodoContext)

  const [toShow, toggleToShow] = useState(false)
  const [completed, toggleCompleted] = useState(isCompleted)

  const changeIsCompleted = (e) => {
    // Prevents parent's onClick
    e.stopPropagation()

    updateTodo({ id, title, body, isCompleted: !completed })
    toggleCompleted(!completed)
  }

  const deleteTodo = (e) => {
    // Prevents parent's onClick
    e.stopPropagation()

    removeTodo(id)
  }

  return (
    <div className={ `todo-item ${ completed && 'todo-item-completed' }` } onClick={ () => toggleToShow(!toShow) }>
      <div className='todo-header'>
        <span className='todo-title' onClick={ (e) => e.stopPropagation() }>{ title }</span>
        <span className='todo-complete clickable' onClick={ (e) => changeIsCompleted(e) }></span>
      </div>
      <div className={ `todo-body ${ toShow && 'todo-body-toShow' }` }>
        { body }
        <button className='clickable' onClick={ (e) => deleteTodo(e) }>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
