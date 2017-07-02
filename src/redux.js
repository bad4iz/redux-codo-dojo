export function createStore(reducer, initialState) {
    let state = initialState;
    const callbacks = [];
    
    const getState = () => state;
    
    const dispatch = (action) => {
        state = reducer(state, action);
        callbacks.forEach(callback => callback());
    };
    
    const subsribe = (callback) => {
        callbacks.push(callback);
        return () => callbacks.filter(cb => cb != callback);
    };
    dispatch({});
    return {getState, dispatch, subsribe};
}
