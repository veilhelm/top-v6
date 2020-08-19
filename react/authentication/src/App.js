import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home(props) {
  return <h1>Home</h1>;
}

function Private() {
  return <h1>Private</h1>;
}

class Profile extends React.Component {
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(({ data }) => console.log(data))
      .catch(() => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
      })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
        <h1>Profile</h1>
      </div>
    );
  }
}

function PrivateRoute(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      history.push('/login')
    }
  }, []);

  return (
    <Route {...props} />
  );
}

// class PRoute extends React.Component {
//   componentDidMount() {
//     const token = localStorage.getItem('token');

//     if(!token) {
//       this.props.history.push('/login');
//     }
//   }

//   render() {
//     return (
//       <Route {...this.props} />
//     )
//   }
// }

// const PrivateRoute = withRouter(PRoute);

// HOF - HOC
// function withRouter(Component) {
//   // logica

//   return (
//     <Component history={} location={} match={}
//   )
// }

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'http://localhost:8000/users/signin',
      data: this.state,
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        this.props.history.push('/profile');
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button>Submit</button>
      </form>
    )
  }
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/private" component={Private} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
