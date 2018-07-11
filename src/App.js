import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import MoviesPage from './components/MoviesPage';
import EventsPage from './components/EventsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path='/' component={MoviesPage} />
            <Route exact path='/events' component={EventsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
