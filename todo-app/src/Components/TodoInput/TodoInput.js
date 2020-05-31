import React from 'react'
import * as classes from './TodoInput.module.css';

const TodoInput = () => {
    return ( 
        <div>
            <form className={classes.TodoInput}>
                <input type="text" className={classes.TodoInput__inputField}/>
                <button className={classes.TodoInput__btn}>Save</button>
            </form>
        </div>
    );
}

export default TodoInput;