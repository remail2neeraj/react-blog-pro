import React from "react";
import useTodo from "../hooks/useTodo";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodo();

  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed
            ? "line-through"
            : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_TODO",
            payload: todo.id,
          })
        }
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TODO",
            payload: todo.id,
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;