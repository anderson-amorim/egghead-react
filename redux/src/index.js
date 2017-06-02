import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CounterReducer from './counter.reducer';
import { createStore } from 'redux';

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const reducer = new CounterReducer();
const store = createStore(reducer.counter);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => {
                store.dispatch({
                    type: 'INCREMENT'
                })
            }}
            onDecrement={() => {
                store.dispatch({
                    type: 'DECREMENT'
                })
            }}
        />
        , document.getElementById('root')
    );
}

store.subscribe(render);
render();