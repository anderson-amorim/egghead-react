import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
    return [...list, 0]
}
it('Test addCounter', () => {
    const listBefore = [];
    const listAfter = [0];
    deepFreeze(listBefore);
    expect(addCounter(listBefore)).toEqual(listAfter);
});


const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}
it('Test removeCounter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    deepFreeze(listBefore);
    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
});


const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index]+1,
        ...list.slice(index + 1)
    ];
}
it('Test incrementCounter', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    deepFreeze(listBefore);
    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
});