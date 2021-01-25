import { useContext, useEffect } from 'react'

// Components
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

// Context
import { TodoContext } from './context/GlobalContext'

// Styles
import './App.css';

function App() {
  const { getTodos, todoList } = useContext(TodoContext)

  useEffect(() => getTodos(), []) // eslint-disable-line

  return (
    <div className="App">
      <TodoInput />
      <div className='items-list'>
        {
          todoList.map(todo => (
            <TodoItem key={ todo.id } todo={ todo } />
          ))
        }
      </div>
    </div>
  );
}

export default App;
