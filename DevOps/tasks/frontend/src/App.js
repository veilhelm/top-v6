import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  
  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/',
      data: { name }
    });

    setTasks(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label for="name">Nueva tarea</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Crear</button>
      </form>
      {tasks && tasks.length > 0 && tasks.map(task => {
        return (
          <div className="task" key={task._id}>
            <h2>{task.name}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
