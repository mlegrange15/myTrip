import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import AppNavbar from './components/AppNavbar'
import Destinations from './components/Destinations'


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar />
      <Destinations />
      </div>
    );
  }
}

export default App;
