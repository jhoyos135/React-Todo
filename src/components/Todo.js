import React, {useState} from 'react';
import './Todo.css'

const Todo = (props) => {

  const [isEditing, setEditing] = useState(false);
  const [task, setTask] = useState(props.task);

  const handleRemove = () => {
    props.removeTodo(props.id);
  };

  const toggleForm = () => {
    setEditing(!isEditing);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
        props.updateTodo(props.id, task);
        setEditing(false);
  };

  const handleChange = (e) => {
    setTask(e.target.value);    
  };

  const handleToggle = () => {
    props.toggle(props.id);
  };

  const renderEdit = () => {
    let result;
    if(isEditing) {
      result = (
        <div className="Todo">
          <form 
          className='Todo-edit-form'
            action=""
            onSubmit={handleUpdate}
          >
            <input 
              value={task}
              name='task'
              onChange={handleChange}
              type="text"
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
    result = (
    <div className="Todo">
      <li 
      onClick={handleToggle}
      className={props.completed ? 'completed Todo-task' : 'Todo-task'}>{props.task}</li>
      <div className="Todo-buttons">
        <button
        onClick={toggleForm}
        > <i className="fas fa-pen" ></i> </button>
        <button
        onClick={handleRemove}
        > <i className="fas fa-trash"></i> </button>
      </div>
    </div>
    )
    }
    return result;
  }

  return (
    renderEdit()
  )
}

export default Todo
