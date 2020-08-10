import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Redirect from="*" to="/popular" />
      </Switch>
    </Router>
  );
}

export default App;
