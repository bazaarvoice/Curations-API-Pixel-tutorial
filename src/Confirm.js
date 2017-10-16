import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header.js';
import Footer from './footer.js';
import ConfirmationGrid from './ConfirmationGrid.js';
import './App.css';
import './my_css.css';
/* global BV */

class App extends Component {
  render() {
    return (
    <div>

      <Header />
      <ConfirmationGrid />
      <Footer />
    </div>
    );
  }
}

export default App;
