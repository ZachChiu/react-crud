import { TYPES } from "./todos-types";

const initState = {
  todos: [],
};

const todoReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case TYPES.SET_TODO:
      return {
        ...state,
        todos: payload,
      };
    case TYPES.REMOVE_TODO:
      return {
        ...state,
        todos: payload,
      };
    case TYPES.TOGGLE_TODO_IS_DONE:
      return {
        ...state,
        todos: payload,
      };
    case TYPES.UPDATE_TODO:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
