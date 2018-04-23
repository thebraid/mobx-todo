import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { decorate, observable, action } from "mobx"
import { observer } from 'mobx-react';

const appState = observable({
    @observable firstName: "firstname",
    @observable lastName: "lastName",
    get getFullName() {
        return `${appState.firstName} ${appState.lastName}`
    },

    changeFirstName: action( ()=> {
        appState.firstName = 'TESTSETSET'
    }),

    autorun: () => {
        console.log('START autorun');
        console.log(appState.firstName);
        console.log('END autorun');
        console.log(' ');

    }
});

// appState.increment = () => {
//     this.count++;
// };
// appState.decrement = () => {
//     this.count--;
// };
//

@observer
class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }

    render() {
        const { appState } = this.props;
        appState.autorun();
        return (
            <div>
                Counter: test<br/>
                {appState.getFullName}
                <button onClick={appState.changeFirstName}>+</button>
                {/*<button onClick={this.handleDec}>-</button>*/}
            </div>
        )
    }

    // incrementCount = () => {
    //     const { appState } = this.props;
    //     // console.log(appState)
    //     appState.inCount();
    // };
    //
    // handleDec = () => {
    //     // this.state.count--;
    //
    // }

}

ReactDOM.render(<App appState={appState}/>, document.getElementById("app"));