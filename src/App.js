import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header.js';
import CurationsGrid from './CurationsGrid.js';
import Footer from './footer.js';
import './App.css';
import './my_css.css';
/* global BV */

class App extends Component {
  render() {
    return (
    <div>

      <Header />
      <CurationsGrid />
      <Footer />
    </div>
    );
  }
}

export default App;
