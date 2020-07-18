import React, { useState, useEffect } from 'react'
import TodoInput from '../../Components/TodoInput/TodoInput';
import TodosList from '../../Components/TodosList/TodosList';
import * as classes from './TodoInputContainer.module.css';
import nextId from "react-id-generator";

const TodoInputContainer = () => {
    const [todo, setTodo] = useState({});
    const [todosList, updateTodosList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            cleanUpTodos(todo);
        }, 1500); 
      }, [todosList]);

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
        let form = event.target;
        let todos = [...todosList];
        if (!todo.text.length) { return; };
        todos.push(todo);
        updateTodosList(todos);
        setTodo({text: '', id: nextId()});
        form.reset();
    }

    const removeTodo = (todoId) => {
        let updatedTodos = todosList.filter(todo => todo.id !== todoId);
        updateTodosList(updatedTodos);
    }

    function cleanUpTodos (todoObject) {
        if (todosList.length > 0) {
            let filteredTodos = todosList.filter(todo => todo.id === todoObject.id);
            updateTodosList(filteredTodos);
        }
    };
        

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