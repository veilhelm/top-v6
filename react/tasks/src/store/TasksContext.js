import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

const tasksMock = [
  {
    id: 1,
    title: 'title 1',
  },
  {
    id: 2,
    title: 'title 2'
  }
];

export function TasksContextProvider({ children }) {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState(tasksMock);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title);
  }

  return (
    <TasksContext.Provider value={{
      handleChange,
      handleSubmit,
      title,
      tasks,
    }}>
      {children}
    </TasksContext.Provider>
  )
}
