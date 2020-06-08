import React, { useState } from 'react'
import TodoInput from '../../Components/TodoInput/TodoInput';
import TodosList from '../../Components/TodosList/TodosList';
import * as classes from './TodoInputContainer.module.css';
import nextId from "react-id-generator";

const TodoInputContainer = () => {
    const [todo, setTodo] = useState({});
    const [todosList, updateTodosList] = useState([]);

    const handleChange = (event) => {
        let todo = event.target.value;
        if (todo.length) { 
            setTodo({
                text: todo,
                id: nextId()
            }) 
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let todos = [...todosList];
        if (!todo.text.length) { return; };
        todos.push(todo);
        updateTodosList(todos);
    }

    const removeTodo = (todoId) => {
        let updatedTodos = todosList.filter(todo => todo.id !== todoId);
        updateTodosList(updatedTodos);
    }

    return ( 
        <div className={classes.TodoInputContainer}>
            <h1>What do you want to get done today?</h1>
            <TodoInput 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TodosList todosList={todosList} removeTodo={removeTodo}/>
        </div>
    );
}

export default TodoInputContainer;