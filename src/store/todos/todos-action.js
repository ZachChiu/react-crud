import { TYPES } from "./todos-types";
import dayjs from "dayjs";

const setTodos = (todos) => {
  return {
    type: TYPES.SET_TODOS,
    payload: todos,
  };
};

const setTodo = (todos, todo) => {
  return {
    type: TYPES.SET_TODO,
    payload: [
      ...todos,
      {
        ...todo,
        createdAt: dayjs().valueOf(),
        isDone: false,
      },
    ],
  };
};

const removeTodo = (todos, removedTodo) => {
  return {
    type: TYPES.REMOVE_TODO,
    payload: todos.filter((todo) => todo.createdAt !== removedTodo.createdAt),
  };
};

const toggleTodoIsDone = (todos, todoIndex) => {
  const newTodos = JSON.parse(JSON.stringify(todos));
  newTodos[todoIndex].isDone = !newTodos[todoIndex].isDone;
  return {
    type: TYPES.TOGGLE_TODO_IS_DONE,
    payload: newTodos,
  };
};

const updateTodo = (todos, todoIndex, updateContent) => {
  const newTodos = JSON.parse(JSON.stringify(todos));
  newTodos[todoIndex].content = updateContent;
  return {
    type: TYPES.UPDATE_TODO,
    payload: newTodos,
  };
};

export { setTodos, setTodo, removeTodo, toggleTodoIsDone, updateTodo };
