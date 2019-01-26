import React, { Component } from 'react';
import './style.css';

class Faq extends Component {
  render() {
    return (
      <div className="Faq section" id="faq">
        <h2>FAQ</h2>

        <div id="questions">
          <h3>How many people can be on a team?</h3>
          <p>The character End of Transmission (EoT) - 0x04</p>

          <h3>What topics does California CTF cover?</h3>
          <p>Cryptography, Web Hacking, Steganography, Forensics and Reverse Engineering among others</p>

          <h3>The only experience with hacking I have is watching Mission Impossible. Where should I start?</h3>
          <ul>
            <li><a href="https://www.hacksplaining.com/" target="_blank">Hacksplaining</a> - General hacking lessons &amp; exercises</li>
            <li><a href="https://github.com/danielmiessler/SecLists" target="_blank">SecLists</a> - The security tester's companion - a collection of multiple types of lists used during security assessments</li>
            <li><a href="https://sqlbolt.com/" target="_blank">SQLBolt</a> - SQL Brushup</li>
            <li><a href="https://learnxinyminutes.com/docs/python3/" target="_blank">Learn X in Y Minutes</a> - Learning Python</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Faq;
