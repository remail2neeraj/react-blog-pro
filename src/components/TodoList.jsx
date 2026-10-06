import React from "react";
import useTodo from "../hooks/useTodo";
import Button from "./Button/Button";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state, dispatch } = useTodo();

  return (
    <div>
      <h4>Todo List</h4>

      {state.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;