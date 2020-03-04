import React, { Component } from 'react';
import axios from 'axios';
import ToDoItem from './todo-item/todo-item.component';
// import ToDoForm from '../todo-form/todo-form.component';

export default class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isComplete: false,
            todo: ''
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
            return <ToDoItem key={todo._id} uniqueID={todo._id} currentToDo={todo.todo} deleteToDo={this.deleteToDo} />
        });
    }

    deleteToDo = (id) => {
        const url = `http://localhost:5000/todos/${id}`;
        axios.delete(url)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        this.setState({ todos: this.state.todos.filter(el => el._id !== id) });
    }

    //START OF POST COMPONENT
    handleChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const todo = {
            todo: this.state.todo
        }
        const url = 'http://localhost:5000/todos/add';
        axios.post(url, todo)
            .then(res => console.log(res.data));

        this.setState({ 
            todo: '',
            todos: this.state.todos.concat(todo)
        });
    }
    //END POST COMPONENT

    render() {
        return (
            <div>
                <h1>ToDoItems</h1>
                {this.todosList()}
                
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            To Do:
                        <input type="text" value={this.state.todo} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}