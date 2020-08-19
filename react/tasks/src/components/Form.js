import React, { useState, useContext } from 'react';
import { TasksContext } from '../store/TasksContext';

export function Form() {
  const tasksContext = useContext(TasksContext);

  return (
    <form onSubmit={tasksContext.handleSubmit}>
      <input
        type="text"
        onChange={tasksContext.handleChange}
        id="title"
        name="title"
        value={tasksContext.title}
      />
      <button>create tasks</button>
    </form>
  )
}
