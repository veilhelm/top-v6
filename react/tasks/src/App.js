import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import { TasksContextProvider } from './store/TasksContext';

function App() {
  return (
    <div className="App">
      <TasksContextProvider>
        <Form />
        <Tasks />
      </TasksContextProvider>
    </div>
  );
}

export default App;
