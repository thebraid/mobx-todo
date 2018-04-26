import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TodoItem from './TodoItem';

const TodoList = ({ store }) => {
    return (
        store.list.map(elem => (
            <TodoItem key={elem.id} elem={elem} remove={store.remove}/>
        ))
    )
};

export default observer(TodoList);