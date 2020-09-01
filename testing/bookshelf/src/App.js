import React from 'react';
import './App.css';
import { Books } from './components/Books'

function App() {
  return (
    <div className="App">
      <Books books={[]} />
    </div>
  );
}

export default App;
