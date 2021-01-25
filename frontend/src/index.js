import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ContextImport
import { TodoProvider } from './context/GlobalContext'

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
