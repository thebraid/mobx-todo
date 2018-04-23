import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import App from './App';

// import { decorate, observable } from "mobx"
// import {observer} from 'mobx-react';
//
// const appState = observable({
//     count: 0
// });
//
// appState.increment = () => {
//     this.count++;
// };
// appState.decrement = () => {
//     this.count--;
// };
//
// @observer class App extends Component {
//     render() {
//         return (
//             <div>
//                 Counter: {appState.count} <br/>
//                 <button onClick={this.handleInc}>+</button>
//                 <button onClick={this.handleDec}>-</button>
//             </div>
//         )
//     }
//
//     handleInc = () => {
//         console.log(this.props);
//         appState.increment();
//     };
//
//     handleDec = () => {
//         // this.props.store.decrement();
//     }
//
// }

ReactDOM.render(<App/>, document.getElementById("app"));