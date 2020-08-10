import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';

function About({ history, location, match }) {
  function goBack(event) {
    event.preventDefault();

    history.goBack();
  }

  console.log(history, location, match)

  return (
    <div>
      <a onClick={goBack}>&lt; go back</a>
      <h1>About</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

function Something() {
  return <h1>Something else</h1>
}

function Default() {
  return <h1>404 page not found</h1>
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/somethingelse">Something</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:userId" component={About} />
        <Route exact path="/about/somethingelse" component={Something} />
        {/* <Route path="*" component={Default} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
