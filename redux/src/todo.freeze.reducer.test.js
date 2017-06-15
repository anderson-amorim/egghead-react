import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    }
}

it('Test toggleTodo', () => {
    const todoBefore = { 
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    };
    deepFreeze(todoBefore);
    expect(toggleTodo(todoBefore)).toEqual(todoAfter);
});