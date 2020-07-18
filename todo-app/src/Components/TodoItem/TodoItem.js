import React from 'react'
import * as classes from './TodoItem.module.css';

const TodoItem = (props) => {
    return ( 
        <div 
            onClick={() => props.removeTodo(props.item.id)}
            className={classes.TodoItem}
        >
            <p>
                {props.item.text}
            </p>
        </div>
    );
}

export default TodoItem;