import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './Todo.css';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const create = (newTodo) => {
      setTodos([...todos, newTodo]);
    };

    const remove = (id) => {
      const deleteTodo = todos.filter(todo => {
        return todo.id !== id
      })
      setTodos(deleteTodo);
    };

    const update = (id, updatedTask) => {
      const updatedTodos = todos.map(todo => {
        if(todo.id === id) {
          return {...todo, task: updatedTask}
        }
        return todo;
      })
      setTodos(updatedTodos);
    };

    const toggleComplete = (id) => {
      const updatedTodos = todos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
      setTodos(updatedTodos);
    };

    const renderTodos = () => {
      return todos.map(todo => {
          return <Todo 
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={remove}
              updateTodo={update}
              toggle={toggleComplete}
          />
      })
  };

    return (
      <div className="TodoList">
        <h1>Todo <span>A simple Todo App with React Hooks</span></h1>
        <ul>
            {renderTodos()}
        </ul>
        <NewTodoForm createTodo={create} />
      </div>
    )
  
}

export default TodoList
