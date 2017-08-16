import React from 'react';
import Search from '../Search'

import logo from './logo.svg';
import './style.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Bio UI</h2>
    </div>
    <div className="App-intro">
      <Search />
    </div>
  </div>
)

export default App;
