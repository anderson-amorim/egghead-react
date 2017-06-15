import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './components/Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br /><br />
          Why don't you activate this switches to warm up?
          <br />
          <Switch id="switch_1" />
          <Switch id="switch_2" />
          <Switch id="switch_3" />
          <Switch id="switch_4" />
        </div>
      </div>
    );
  }
}

export default App;
