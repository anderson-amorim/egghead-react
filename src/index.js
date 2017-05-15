import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';

ReactDOM.render(
  <App txt="I've come to talk with you again" cat={5}/>, document.getElementById('root'));
ReactDOM.render(
  <App2 />, document.getElementById('root2'));
