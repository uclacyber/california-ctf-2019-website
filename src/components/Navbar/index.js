import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul>
          <a href="#about"><li>about</li></a>
          <a href="#register"><li>register</li></a>
          <a href="#sponsors"><li>sponsors</li></a>
          <a href="#faq"><li>faq</li></a>
          <a href="#contact"><li>contact</li></a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
