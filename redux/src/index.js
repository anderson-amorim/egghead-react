import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CounterReducer from './counter.reducer';
import { createStore } from 'redux';
import TodoApp from './todos.reducer.js';

//ReactDOM.render(<App />, document.getElementById('root'));