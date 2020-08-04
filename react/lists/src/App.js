import React from 'react';
import logo from './logo.svg';
import './App.css';

// complejidad temporal
// Big O Notation
// O(1)
// O(logN)
// O(n)

// [1,2,3].push(4); // O(1)
// [1,2,3].pop(); // O(1)
// [1,2,3].unshift(0); // O(n)




function Tasks({ tasks }) {
  return tasks.map((task) => {
    return (
      <div key={task.id} className={`task-${task.id}`}>
        <h2>{task.title}</h2>
        <span>{task.done ? 'Completed' : 'In progress'}</span>
        {!task.done ?
          <button>Complete</button> :
          <span>Congrats</span>
        }
      </div>
    );
  });

  // return [
  //   <div key={0} className={`task-${0}`}>
  //     <h2>task 1</h2>
  //     <span></span>
  //   </div>,
  //   <div key={1} className={`task-${1}`}>
  //     <h2>task 2</h2>
  //     <span></span>
  //   </div>,
  //   <div key={2} className={`task-${2}`}>
  //     <h2>task 3</h2>
  //     <span></span>
  //   </div>
  // ]
}

function App() {
  let mockTasks = [
    {
      id: 0,
      title: 'task 1',
      done: false
    },
    {
      id: 1,
      title: 'task 2',
      done: true
    },
    {
      id: 2,
      title: 'task 3',
      done: false
    },
  ];

  return (
    <div>
      <Tasks tasks={mockTasks} page={2} />
      <Tasks tasks={[{ id: 0, title: 'task 15', done: true }]} />
    </div>
  )
}

export default App;
