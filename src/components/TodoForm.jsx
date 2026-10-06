import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import Button from "./Button/Button";

const TodoForm = () => {
  const [text, setText] = useState("");

  const { dispatch } = useTodo();

  const handleSubmit = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text: text,
        completed: false,
      },
    });

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        style={{height:"40px", margin:"10px"}}
      />

      <Button onClick={handleSubmit} variant="success" size="small">
        Add Todo
      </Button>
    </div>
  );
};

export default TodoForm;