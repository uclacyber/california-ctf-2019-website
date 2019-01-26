import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Schedule from './components/Schedule';
import Faq from './components/Faq';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navbar />
        <About />
        <Register />
        <Schedule />
        <Faq />
        <Contact />
      </div>
    );
  }
}

export default App;
