import React, { Component } from 'react';
import axios from 'axios';
import ToDoItem from './todo-item/todo-item.component';

export default class ToDoItems extends Component {
    constructor(props) {
        super();
        this.state = {
            todos: [],
            isComplete: false,
        }

    }

    componentDidMount() {
        const url = 'http://localhost:5000/todos/';
        axios.get(`${url}`)
            .then((res) => {
                console.log(res.data);
                this.setState({ todos: res.data })
            }).catch(err => {
                console.log(err);
            });
    }

    todosList = () => {
        return this.state.todos.map(todo => {
            console.log(todo.todo);
            return todo.todo
        });
    }
    render() {
        return (
            <div>
                <h1>ToDoItems</h1>
                <h2><ToDoItem /></h2>
                {/* <div>{this.todosList()}</div> */}
                {this.todosList()}
            </div>
        );
    }
}