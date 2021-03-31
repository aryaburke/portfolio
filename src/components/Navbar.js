import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
      return (
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="poems">poems</Link></li>
            <li><Link to="stories">stories</Link></li>
            <li><Link to="code">code</Link></li>
            <li><Link to="about">about</Link></li>
          </ul>
        </nav>
      );
    }
}