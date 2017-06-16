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
          <br /><br />
          Why don't you play around with this switches to get started?
          <br /><br /><br />
          <Switch id="01" active={false} />
          <br />

          <Switch id="02" active={true} />
          <Switch id="03" active={false} />

          <br />
          <Switch id="04" active={true} /> 
          <Switch id="05" active={false}/> 
          <Switch id="06" active={false} />
          <br />

          <Switch id="07" active={true} /> 
          <Switch id="08" active={false}/> 
          <Switch id="09" active={false}/> 
          <Switch id="10" active={false} />
          <br />

          <Switch id="11" active={true} /> 
          <Switch id="12" active={true}/> 
          <Switch id="13" active={true}/> 
          <Switch id="14" active={true}/> 
          <Switch id="15" active={true} />
          <br />

          <Switch id="16" active={true} /> 
          <Switch id="17" active={false}/> 
          <Switch id="18" active={false}/> 
          <Switch id="19" active={false} />
          <br />

          <Switch id="20" active={true} />
          <Switch id="21" active={false}/> 
          <Switch id="22" active={false} />
          <br />

          <Switch id="23" active={true} /> 
          <Switch id="24" active={false} />
          <br />

          <Switch id="25" active={false} />
          <br />

        </div>
      </div>
    );
  }
}

export default App;
