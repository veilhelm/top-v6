import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Button />
      <Counter greet="hola mundo" oneProp="hola" />
    </div>
  );
}

export default App;
