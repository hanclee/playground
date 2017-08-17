import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bio UI</h2>
        </div>
        <div className="App-intro">
          <form id="dna-search" className="form-inline">
            <label htmlFor="search" className="sr-only">Enter a DNA search:</label>
            <input type="text" id="search" className="form-control" placeholder="Cypripedioideae"/>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
