import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact section" id="contact">
        <h2>CONTACT US:</h2>
        <a>Facebook</a>
        <a>Instagram</a>
        <a href="http://www.uclaacm.com/">Website</a>
        <a>Email</a>
        <p>Copyright &copy; 2019</p>
      </div>
    );
  }
}

export default Contact;
