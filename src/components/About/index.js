import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <div className="About section" id="about">
        <h2>ABOUT</h2>

        <div className="split">
          <div className="wrapper">
            <img src="/images/flag.png" />
          </div>
          <p>Capture the Flag is a security hackathon - which means you’ll actually be hacking! Participants compete against other student teams. The event is open to students of all skill levels and we are especially beginner friendly. The goal is to capture a flag hidden in the solution of a challenging question. The more difficult a question, the more points your team is awarded for "capturing" that particular flag.</p>
        </div>
      </div>
    );
  }
}

export default About;
