import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
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
        <Sponsors />
        <Faq />
        <Contact />
      </div>
    );
  }
}

export default App;
