import CounterReducer from './counter.reducer';

it('Testing counter return values', () => {
    const reducer = new CounterReducer();
    expect(reducer.counter(0, { type: 'INCREMENT' })).toEqual(1);
    expect(reducer.counter(1, { type: 'INCREMENT' })).toEqual(2);
    expect(reducer.counter(2, { type: 'DECREMENT' })).toEqual(1);
    expect(reducer.counter(1, { type: 'DECREMENT' })).toEqual(0);
    expect(reducer.counter(1, { type: 'SOMETHING_SILLY' })).toEqual(1);
    expect(reducer.counter(undefined, { type: 'SOMETHING_SILLY' })).toEqual(0);
});
