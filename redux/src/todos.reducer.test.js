import deepFreeze from 'deep-freeze';
import { Map, List } from 'immutable';
import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            }

        default:
            return state;
    }
}
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

/*
const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
}*/

const myCombineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    }
}

const todoApp = myCombineReducers({ todos, visibilityFilter });
//const todoApp = combineReducers({ todos, visibilityFilter });

it('Test todos', () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it('Test toggleTodos', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go Shooping',
            completed: false
        }
    ];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go Shooping',
            completed: true
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it('Test with redux', () => {
    const store = createStore(todoApp);
    console.log('/* DEFAULT STATE */');
    console.log(store.getState());

    store.dispatch({
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    });
    console.log('/* ADD_TODO #1 */');
    console.log(store.getState());

    store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'Go Shooping'
    });
    console.log('/* ADD_TODO #2 */');
    console.log(store.getState());

    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 0
    });
    console.log('/* TOGGLE_TODO */');
    console.log(store.getState());

    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    });
    console.log('/* SET_VISIBILITY_FILTER */');
    console.log(store.getState());

});