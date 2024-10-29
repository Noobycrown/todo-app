import React, { useState } from 'react';

function Todo({ todo, toggleComplete, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    editTodo(newText);
    setIsEditing(false);
  };

  // Check if the task is overdue
  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <li
      className={`${todo.completed ? 'completed' : ''} priority-${todo.priority} ${
        isOverdue ? 'overdue' : ''
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      {todo.dueDate && <span className="due-date">Due: {todo.dueDate}</span>}
      <div className="button-group">
        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={toggleComplete}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={removeTodo}>Remove</button>
      </div>
    </li>
  );
}

export default Todo;
