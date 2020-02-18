import React from 'react';

const ToDoItem = (props) => {
    return <div>{props.currentToDo} <button onClick={() => {props.deleteToDo(props.uniqueID)}}>Delete</button></div>
}

export default ToDoItem;