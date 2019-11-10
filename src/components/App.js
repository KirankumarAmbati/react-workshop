import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }
    addTodo() {

    }
    render() {
        return (
            <div>
                <input type="text" />
                <button>Add TODO</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))