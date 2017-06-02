import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CounterReducer from './counter.reducer';
import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const reducer = new CounterReducer();
const store = createStore(reducer.counter);

const render = () => {
    document.querySelector('.App-intro').innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
})