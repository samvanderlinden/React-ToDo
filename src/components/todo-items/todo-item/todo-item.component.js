import React from 'react';

const ToDoItem = (props) => {
    console.log({props});
    return <div>{props.currentToDo} <button onClick={() => {props.deleteToDo(props.uniqueID)}}>Delete</button></div>
}

export default ToDoItem;