import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { initialState, todoReducer } from "../reducers/todoReducer";
const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
       <TodoContext.Provider value={{state, dispatch,}}>
            {children}
        </TodoContext.Provider>
    </>
  )
}

export default TodoProvider
