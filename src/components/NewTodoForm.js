import React, { useState } from 'react';
import uuid from 'uuid';
import './Todo.css';
const NewTodoForm = (props) => {

  const [task, setTask] = useState('');

  const handleChange = (e) => {
      setTask(e.target.value);    
    };
  const handleSubmit = (e) => {
      e.preventDefault();
      props.createTodo({task, id: uuid(), completed: false});
      setTask('');
    };
  
    return (
     <form className='NewTodoForm' onSubmit={handleSubmit}>
         <label htmlFor="task"></label>
         <input
            id='task'
            value={task}
            name="task"
            type="text"
            onChange={handleChange}
            placeholder='new todo'

         />
         <button>Add</button>
     </form>
    )
  
}

export default NewTodoForm
