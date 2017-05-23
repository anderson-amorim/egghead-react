import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';

ReactDOM.render(
  <App txt="I've come to talk with you again" cat={5} />, document.getElementById('root'));
ReactDOM.render(
  <App2 />, document.getElementById('root2'));
ReactDOM.render(
  <App3 />, document.getElementById('root3'));
ReactDOM.render(
  <App4 />, document.getElementById('root4'));
ReactDOM.render(
  <App5 />, document.getElementById('root5'));
ReactDOM.render(
  <App6 />, document.getElementById('root6'));
