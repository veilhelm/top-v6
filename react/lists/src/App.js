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
      // ejemplo: como modificar el estado desde un componente hijo
      title: '',
      tasks: [],
    }
  }

  completeTask = (id) => {
    return (event) => {
      const tasks = this.state.tasks.map((task) => {
        if(task.id === id) {
          return {
            ...task,
            done: true,
          }
        }

        return task;
      });

      this.setState({ tasks })
    }
  }

  deleteTask = (id) => {
    return () => {
      const tasks = this.state.tasks.filter((task) => {
        return task.id !== id;
      });

      this.setState({ tasks });
    }
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  createTask = (task) => {
    const newTask = {
      id: uuid(),
      title: this.state.title,
      ...task,
    };

    this.setState({
      tasks: this.state.tasks.concat(newTask)
    })
  }

  render() {
    return (
      <div>
        <Form
          createTask={this.createTask}
          title={this.state.title}
          changeTitle={this.changeTitle}
        />
        <Tasks
          tasks={this.state.tasks}
          completeTask={this.completeTask}
          deleteTask={this.deleteTask}
          page={2}
        />
      </div>
    );
  }
}

export default App;
