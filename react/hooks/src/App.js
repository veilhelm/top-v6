import React, { useState, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

// Render Props
// class Count extends React.Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState(state => ({
//       count: state.count + 1
//     }));
//   }

//   render() {
//     return this.props.children(this.state.count, this.handleClick);
//   }
// }

// class Counter extends React.Component {
  // componentDidMount() {
  //   document.title = `hello ${this.state.count}`
  // }

  // componentDidUpdate() {
  //   document.title = `hello ${this.state.count}`
  // }

//   render() {
//     return (
//       <Fragment>
//         <Count>{(count, setCount) => {
//           return (
//             <button onClick={setCount}>{count}</button>
//           );
//         }}</Count>
//         <Count>{(count, setCount) => {
//           return (
//             <Fragment>
//               <span>{count}</span>
//               <button onClick={setCount}>Increase count</button>
//             </Fragment>
//           );
//         }}</Count>
//       </Fragment>
//     )
//   }
// }

// 1. los hooks siempre se deben ejecutar en el mismo orden.
// 2. los hooks siempre se deben ejecutar en el primer nivel de la función.
// 3. los hooks siempre se deben nombrar iniciado con use.
// 4. los hooks solo se pueden usar en un Componente de React o en otro hook.

function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  function handleSubmit() {
    console.log('hola mundo')
  }

  return { count, handleClick, handleSubmit };
}

function Counter() {
  const { count, handleClick } = useCount();

  useEffect(() => {
    document.title = `hello ${count}`;

    function handleResize(e) {
      console.log(e.target.innerWidth)
    }

//     // axios({
//     //   method: 'GET',
//     //   url: 'http://localhost:8000',
//     // })
//     //   .then(({ data }) => setPosts(data))
//     //   .catch((error) => setError(error))
//     //   .finally(() => setLoading(false));

    window.addEventListener('resize', handleResize)

    return () => {
      console.log('component will unmount')
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);


  return (
    <button onClick={handleClick}>{count}</button>
  );

  // const [count, setCount] = useState(0); // 1 1 1
  // if(count < 2) {
  //   const [name, setName] = useState(''); // 2 2
  // }
  // const [lastname, setLastname] = useState(''); // 3 3 2

  // if(false) {
  //   useOne(); X
  // }
  // useTwo(); OK

  // function handleclick() {
  //   useThree(); X
  // }
}

function Counter2() {
  const { count, handleClick } = useCount(10);
  const { count: count2, handleClick: handleClick2 } = useCount(5);

  return (
    <Fragment>
      <span>{count}</span>
      <button onClick={handleClick}>Increase Count</button>
      <button onClick={handleClick2}>{count2}</button>
    </Fragment>
  )
}

function App() {
  const [shouldRender, setShouldRender] = useState(true);

  // if(shouldRender) {
  //   setTimeout(() => {
  //     setShouldRender(false);
  //   }, 3000)
  // }

  return (
    <div className="App">
      {shouldRender && <Counter />}
      <Counter2 />
    </div>
  );
}

export default App;
