import React from 'react'
import * as classes from './TodoInput.module.css';

const TodoInput = (props) => {
    return ( 
        <div>
            <form className={classes.TodoInput}
                onSubmit={props.handleSubmit}
            >
                <input 
                    type="text" 
                    className={classes.TodoInput__inputField}
                    onChange={props.handleChange}
                />
                <button className={classes.TodoInput__btn}>Save</button>
            </form>
        </div>
    );
}

export default TodoInput;