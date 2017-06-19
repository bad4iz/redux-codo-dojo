import React, { Component } from 'react';
import Store from './store';

const initialState = { count: 0};

function updateState(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return {count: state.count + action.amount};
            break;
        }
        case 'DECREMENT': {
            return { count: state.count - action.amount};
            break;
        }
        case 'RESET': {
            return { count: 0};
            break;
        }
        default: return state;
    }
}

const incrementAction = { type: 'INCREMENT', amount: 1};
const decrementAction = { type: 'DECREMENT', amount: 1};
const resetAction = { type: 'RESET'};

const store = new Store(updateState, initialState);

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { count: 0 };
    }
    
    componentDidMount() {
        store.subscribe(()=> this.forceUpdate());
    }
    
    increment = () => {
        store.update(incrementAction);
    };
    decrement = () => {
        store.update(decrementAction);
    };
    reset = () => {
        store.update(resetAction);
    };
    
    render() {
        return (
            <div className="counter">
                <span className="count">{store.state.count}</span>
                
                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}> - </button>
                    <button className="decrement" onClick={this.reset}> reset </button>
                    <button className="increment" onClick={this.increment}> + </button>
                </div>
            </div>
        );
    }
}

export default App;
