import React from 'react';

const ToDoItem = (props) => {
    console.log({props});
    return <div>{props.todo}</div>
}

export default ToDoItem;