import React, { Component } from 'react';
import './style.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div id="title">
          <h1>CALIFORNIA CTF</h1>
          <h2>2019</h2>
        </div>

        <div id="watermark">
          <img src="images/logo-netsec-black.svg" />
          <p>hosted by acm cyber @ ucla</p>
        </div>
      </div>
    );
  }
}

export default Banner;
