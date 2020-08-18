import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// class Counter extends React.Component {
//   state = {
//     count: 0,
//     favorites: [],
//   };

//   componentDidMount() {
//     document.title = `hello ${this.state.count}`
//   }

//   componentDidUpdate() {
//     document.title = `hello ${this.state.count}`
//   }

//   handleClick = () => {
//     this.setState(state => ({
//       count: state.count + 1
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>{this.state.count}</button>
//     )
//   }
// }

// 1. los hooks siempre se deben ejecutar en el mismo orden.
// 2. los hooks siempre se deben ejecutar en el primer nivel de la función.
// 3. los hooks siempre se deben nombrar iniciado con use.

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `hello ${count}`;

    function handleResize(e) {
      console.log(e.target.innerWidth)
    }

    // axios({
    //   method: 'GET',
    //   url: 'http://localhost:8000',
    // })
    //   .then(({ data }) => setPosts(data))
    //   .catch((error) => setError(error))
    //   .finally(() => setLoading(false));

    window.addEventListener('resize', handleResize)

    return () => {
      console.log('component will unmount')
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

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

function App() {
  const [shouldRender, setShouldRender] = useState(true);

  if(shouldRender) {
    setTimeout(() => {
      setShouldRender(false);
    }, 3000)
  }

  return (
    <div className="App">
      {shouldRender && <Counter />}
    </div>
  );
}

export default App;
