const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        // error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATE_USER":
  return {
    ...state,
    users: state.users.map((user) =>
      user.id === action.payload.id
        ? action.payload
        : user
    ),
  };

    default:
      return state;
  }
};

export { initialState, usersReducer };