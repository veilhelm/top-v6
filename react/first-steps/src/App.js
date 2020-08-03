import React from 'react';
import logo from './logo.svg';
import './App.css';

// class => className
// for => htmlFor

// function App() {
//   return React.createElement(
//     'div',
//     { className: 'App' },
//     React.createElement(
//       'header',
//       { className: 'App-header' },
//       React.createElement(
//         'img',
//         {
//           src: logo,
//           className: 'App-logo',
//           alt: 'logo'
//         }
//       ),
//       React.createElement(
//         'p',
//         null,
//         'Edit src/App.js and save to reload.'
//       ),
//     )
//   )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
