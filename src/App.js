import React, { Component } from 'react';
import { decorate, observable } from "mobx"
import {observer} from 'mobx-react';

const appState = observable({
    count: 0
});

// appState.increment = () => {
//     this.count++;
// };
// appState.decrement = () => {
//     this.count--;
// };

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                Counter: {this.state.count} <br/>
                <button onClick={this.incrementCount}>+</button>
                {/*<button onClick={this.handleDec}>-</button>*/}
            </div>
        )
    }

    incrementCount = () => {
        const { count } = this.state;

        this.setState({
            count: count + 1
        });
        // this.setState({
        //     count: this.count + 1
        // })
        // this.setState(count += 1)
    };

    handleDec = () => {
        // this.state.count--;

    }

}

export default App;