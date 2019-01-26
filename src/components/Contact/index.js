import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact section" id="contact">
        <h2>CONTACT US:</h2>
        <a href="mailto:uclacyber@gmail.com" target="_blank">Email</a>
        <a href="https://www.facebook.com/groups/320869398280511/" target="_blank">Facebook</a>
        <a href="https://discordapp.com/invite/5fqUvFZ?fbclid=IwAR06BfN5fteTA1Z3fweiLkYYx9x4Opz8ULtjEiuJNbfSOqOcKaqIEPDpvm4" target="_blank">Discord</a>
        <a href="https://facebook.us19.list-manage.com/subscribe?u=73e7775028a70c4c696d80cf0&id=2bd7f0b054" target="_blank">Newsletter</a>
        <p>Copyright &copy; 2019</p>
      </div>
    );
  }
}

export default Contact;
