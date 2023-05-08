import todoReducer from "./todos/todos-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
