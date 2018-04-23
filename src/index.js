import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { decorate, observable, action } from "mobx"
import { observer } from 'mobx-react';

const appState = observable({
    count: 0,

    increment() {
        this.count++;
    },

    descrement() {
        this.count--;
    },
});

@observer class App extends Component {

    handleInc = () => {
        this.props.appState.increment();
    };

    handleDec = () => {
        this.props.appState.descrement();
    };

    render() {
        const { appState } = this.props;
        return (
            <div>
                Counter: {appState.count}<br/>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<App appState={appState}/>, document.getElementById("app"));