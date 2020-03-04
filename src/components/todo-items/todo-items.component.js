import React, { Component } from 'react';
import axios from 'axios';
import ToDoItem from './todo-item/todo-item.component';

export default class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isComplete: '',
            todo: ''
        }
    }

    //GET TODO ITEMS
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
            return <ToDoItem key={todo._id} 
                             uniqueID={todo._id} 
                             currentToDo={todo.todo} 
                             isComplete={todo.isComplete}
                             deleteToDo={this.deleteToDo} 
                             toggleToDo={this.toggleToDo}/>
        });
    }

    //DELETE TODO ITEM
    deleteToDo = (id) => {
        const url = `http://localhost:5000/todos/${id}`;
        axios.delete(url)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        this.setState({ todos: this.state.todos.filter(el => el._id !== id) });
    }

    toggleToDo = () => {
        console.log(this.state.isComplete);
        this.setState({isComplete: !this.state.isComplete});
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    //POST TODO ITEM
    handleSubmit = (event) => {
        event.preventDefault();
        const todo = {
            todo: this.state.todo,
            isComplete: false
        }
        const url = 'http://localhost:5000/todos/add';
        axios.post(url, todo)
            .then(res => console.log(res.data));

        this.setState({
            todo: '',
            todos: this.state.todos.concat(todo),
        });
    }

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