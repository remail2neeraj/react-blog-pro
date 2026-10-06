import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef
} from "react";

import UsersContext from "./UserContext";

import {
  initialState,
  usersReducer,
} from "../reducers/usersReducer";

import { fetchUsers } from "../services/userService";

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
const controllerRef = useRef(null);

  const loadUsers = useCallback(async () => {
  // Previous request cancel
  if (controllerRef.current) {
    controllerRef.current.abort();
  }

  // Create new controller
  const controller = new AbortController();

  // Store current controller
  controllerRef.current = controller;

  dispatch({
    type: "FETCH_START",
  });

  try {
    const data = await fetchUsers(controller.signal);


dispatch({
  type: "FETCH_SUCCESS",
  payload: data,
});
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }

    dispatch({
      type: "FETCH_ERROR",
      payload: error.message,
    });
  }
}, []);

useEffect(() => {
  loadUsers();

  return () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };
}, [loadUsers]);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
        loadUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;