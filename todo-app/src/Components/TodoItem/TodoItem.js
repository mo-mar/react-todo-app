import React from 'react'
import * as classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return ( 
        <div onClick={() => props.removeTodo(props.item.id)}className={classes.TodoItem}>
            {props.item.text}
        </div>
    );
}

export default TodoItem;