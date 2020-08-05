import React, { Component } from 'react';
import { Tasks } from './components/Tasks';
import Form from './components/Form';
import logo from './logo.svg';
import uuid from 'uuid-random';
import './App.css';

// complejidad temporal
// Big O Notation
// O(1)
// O(logN)
// O(n)

// [1,2,3].push(4); // O(1)
// [1,2,3].pop(); // O(1)
// [1,2,3].unshift(0); // O(n)

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    }
  }

  createTask = (task) => {
    const newTask = {
      id: uuid(),
      ...task
    };

    this.setState({
      tasks: this.state.tasks.concat(newTask)
    })
  }

  render() {
    return (
      <div>
        <Form createTask={this.createTask} />
        <Tasks tasks={this.state.tasks} page={2} />
      </div>
    );
  }
}

export default App;
