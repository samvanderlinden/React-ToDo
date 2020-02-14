import React, {Component} from 'react';
import ToDoItem from './todo-item/todo-item.component';

export default class ToDoItems extends Component {
    render() {
        return (
            <div>
                <h1>ToDoItems</h1>
                <h2><ToDoItem/></h2>
            </div>
        );
    }
}