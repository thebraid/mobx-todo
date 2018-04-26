import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { decorate, observable, action, computed } from "mobx"
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Store from './models/Store';

const store = Store.create({
    list: [
        {title: 'task 1'},
        {title: 'task 2'},
        {title: 'task 333333333'},
    ]
});

const App = observer(({ store }) => {
    return (
        <div>
            <TodoInput store={store}/>
            <TodoList store={store}/>
            <DevTools/>
        </div>
    )
});

ReactDOM.render(<App store={store}/>, document.getElementById("app"));

