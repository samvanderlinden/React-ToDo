import React, { Component } from 'react';
import axios from 'axios';

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            todoItem: this.state.value
        }
        console.log({todo});
        
        const url = 'http://localhost:5000/todos/add';
        axios.post(url, todo)
        .then(res => console.log(res.data));

        this.setState({value: ''});
        
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        To Do:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}