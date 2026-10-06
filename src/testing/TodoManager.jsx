import { useState } from "react";
import useTodo from "../hooks/useTodo";
import TodoForm from "../components/TodoForm";
import Button from "../components/Button/Button";
import TodoList from "../components/TodoList";

const TodoManager = () => {
    
    const { state, dispatch } = useTodo();
  return (
    <>
      <h3>Todo Manager with Reducer</h3>
      <TodoForm />
      <span><Button variant="danger" size="small" onClick={()=>dispatch({type:"CLEAR_ALL"})}>🔄 Clear All</Button></span>
      <br/>
       <TodoList />
    </>
  )
}

export default TodoManager
