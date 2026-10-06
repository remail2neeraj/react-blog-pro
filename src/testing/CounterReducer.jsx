import React, { useReducer } from 'react'

const initialState = { count: 0, };

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + action.payload,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }

  return state;
};
const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5})}
      >INCREMENT + 5
      </button>
    <span>&nbsp; &nbsp; &nbsp;</span>
      <button onClick={() => dispatch({ type: "DECREMENT" })}
      >DECREMENT - 1
      </button>
    </>
  )
}

export default CounterReducer
