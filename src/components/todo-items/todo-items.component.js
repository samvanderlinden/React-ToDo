import React, { Component } from 'react';
import axios from 'axios';
import ToDoItem from './todo-item/todo-item.component';

export default class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isComplete: false,
        }
    }

    componentDidMount() {
        const url = 'http://localhost:5000/todos/';
        axios.get(url)
            .then((res) => {
                this.setState({ todos: res.data })
            }).catch(err => {
                console.log(err);
            });
    }

    todosList = () => {
        return this.state.todos.map(todo => {
            console.log({todo});
            return <ToDoItem key={todo._id} uniqueID={todo._id} currentToDo={todo.todo} deleteToDo = {this.deleteToDo} />
        });
    }

    deleteToDo = (id) => {
        const url = `http://localhost:5000/todos/${id}`;
        axios.delete(url)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        this.setState({todos:this.state.todos.filter(el => el._id !== id)});
    }

    render() {
        return (
            <div>
                <h1>ToDoItems</h1>
                {this.todosList()}
            </div>
        );
    }
}