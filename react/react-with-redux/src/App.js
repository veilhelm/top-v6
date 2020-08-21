import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { TextArea } from './components/TextArea';
import { Text } from './components/Text';

function App() {
  return (
    <div className="App">
      <Button />
      <Counter greet="hola mundo" oneProp="hola" />
      <TextArea />
      <Text />
    </div>
  );
}

export default App;
