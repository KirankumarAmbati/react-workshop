import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    name:'Write an Article',
                    completed: false
                },
                {
                    name:'Read Book',
                    completed: false
                },
                {
                    name:'Ride Bicycle',
                    completed: true
                }
            ],
            newTodo: ''
        }

        this.addTodo = this.addTodo.bind(this)
    }
    addTodo() {
        let { newTodo, todos } = this.state

        todos.push({
            name: newTodo,
            completed: false
        })

        this.setState({
            todos
        })
    }
    deleteTodo(index) {
        let { todos } = this.state

        todos = todos.filter(( _, i) => i !== index)

        this.setState({
            todos
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ newTodo: e.target.value })} />
                <button onClick={this.addTodo}>Add TODO</button>
                <ul>
                    {
                        this.state.todos.map((todo, index) => (
                            <li>{todo.name}<span style={{ color: 'red', cursor: 'pointer'}} onClick={() => this.deleteTodo(index)}>X</span></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))