import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { count: 0 };
    };
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    
    render() {
        return (
            <div className="counter">
                <span className="count">{this.state.count}</span>
                
                <div className="buttons">
                    <button className="decrement" onClick={this.decrement}> - </button>
                    <button className="increment" onClick={this.increment}> - </button>
                </div>
            </div>
        );
    }
}

export default App;
