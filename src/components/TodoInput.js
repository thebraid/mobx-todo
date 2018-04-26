import { observer } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';

@observer
class TodoInput extends Component {
    @observable input = '';

    handleChange = (e) => {
        this.input = e.target.value;
    };

    handleClick = () => {
        this.props.store.add(this.input);
        this.input = '';
    };

    render() {
        return (
            <div>
                <input
                    value={this.input}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Add</button>
            </div>

        )
    }

}

export default TodoInput;