import { observer } from 'mobx-react';
import * as React from 'react';

const TodoItem = ({ elem, remove }) => {
    return (
        <div style={{display: "flex"}}>
            <input
                type="checkbox"
                checked={elem.done}
                onClick={elem.toggle}
            />
            <div
                style={{textDecoration: elem.done? "line-through" : "none"}}
            >
                {elem.title}
            </div>
            <button onClick={() => remove(elem)}>X</button>
        </div>
    )
};

export default observer(TodoItem);