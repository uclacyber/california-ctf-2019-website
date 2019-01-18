import React, { Component } from 'react';
import './style.css';

class Register extends Component {
  render() {
    return (
      <div className="Register section">
        <img src="/images/terminal.png"/>
        <div id="register-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin blandit nibh rutrum accumsan. Phasellus condimentum libero eget dapibus rutrum. Maecenas in luctus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas fringilla odio id vehicula tristique. Suspendisse auctor tincidunt leo, at varius leo.</p>
          <button className="right">REGISTER HERE</button>
        </div>
      </div>
    );
  }
}

export default Register;
