import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul>
          <li><a>about</a></li>
          <li><a>register</a></li>
          <li><a>sponsors</a></li>
          <li><a>faq</a></li>
          <li><a>contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
