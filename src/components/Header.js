import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="header-cont">
            <h1 className="App-title">Movies App</h1>
            <Link className="nav-link" to={'/'}>Movies</Link>
            <Link className="nav-link" to={'/events'}>Events</Link>
          </div>
        </header>
    );
  }
}

export default Header;
