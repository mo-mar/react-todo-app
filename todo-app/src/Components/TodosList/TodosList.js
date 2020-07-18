import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

// Takes in an array of todo objects. must have text property

const TodosList = (props) => {

    const todosList = props.todosList.map((todo, index) => {
        return <TodoItem key={index} item={todo} removeTodo={props.removeTodo}/>
    });


    return ( 
        <div>
            {todosList}
        </div>
    );
}

export default TodosList;