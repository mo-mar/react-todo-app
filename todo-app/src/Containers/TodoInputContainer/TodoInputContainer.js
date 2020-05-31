import React from 'react'
import TodoInput from '../../Components/TodoInput/TodoInput';
import * as classes from './TodoInputContainer.module.css';

const TodoInputContainer = () => {
    return ( 
        <div className={classes.TodoInputContainer}>
            <h1>What do you want to get done today?</h1>
            <TodoInput />
        </div>
    );
}

export default TodoInputContainer;