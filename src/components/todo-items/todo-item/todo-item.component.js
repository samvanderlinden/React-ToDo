import React from 'react';

const ToDoItem = (props) => {
    console.log({props});
    
    const toDoStyling = {
        color: props.isComplete ? 'red' : 'green'
    }
    return <div>
        <span styling={toDoStyling}>{props.currentToDo}</span>
        <button onClick={() => {props.deleteToDo(props.uniqueID)}}>Delete</button>
        <button onClick={() => props.toggleToDo()}>Toggle ToDo</button>
        </div>
}

export default ToDoItem;