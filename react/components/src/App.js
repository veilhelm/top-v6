import React from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: 'Ana',
      age: 28
    }

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    // this.setState({ count: this.state.count + 1 });
    this.state.count += 1;
  }

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Hola {this.props.name}</p>
        <p>{this.props.age}</p>
        <button onClick={this.increaseCount}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    );
  }
}

function App() {
  let name = 'Maria';
  return (
    <div className="App">
      <Counter name={name} age={23} />
      <Counter name="Juan" />
      <Counter name={0} />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
