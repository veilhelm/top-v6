import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

// se va a montar - componentWillMount()
// monta - render()
// el componente se montó - componentDidMount();

// cambio en el estado o props - El component se debería actualizar?
// shouldComponentUpdate()

// El componte se va a actualizar - componentWillUpdate
// actualización - render();
// el component se actualizo.

// El componente se va a desmontar.

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      posts: [],
      loading: true,
      error: null,
    };
  }

  // UNSAFE_componentWillMount() {}

  componentDidMount() {
    // document.title = 'hola mundo';
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
    })
      .then(({ data }) => this.setState({ posts: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    window.addEventListener('resize', () => {
      console.log('here');
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(nextState.title !== this.state.title) {
      return true;
    // }

    // return false;
  }

  // UNSAFE_componentWillUpdate() {}

  // componentDidUpdate() {}

  componentWillUnmount() {
    // axios.cancell()
    window.removeListener('resize');
  }

  render() {
    const { loading, posts, error } = this.state;

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Ups! Something went wrong</p>;
    return (
      <div className="App">
        <Form />
        {/* {posts.map(({ id, title, body }) => {
          return (
            <div key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          )
        })} */}
      </div>
    );
  }
}

export default App;
