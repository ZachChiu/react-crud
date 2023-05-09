import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo(state, { payload }) {
      state.push({
        ...payload,
        createdAt: dayjs().valueOf(),
        isDone: false,
      });
    },
    setTodos(state, { payload }) {
      return payload;
    },
    removeTodo(state, { payload }) {
      return state.filter((todo) => todo.createdAt !== payload.createdAt);
    },
    toggleTodoIsDone(state, { payload }) {
      state[payload].isDone = !state[payload].isDone;
    },
    updateTodo(state, { payload }) {
      const index = payload.index;
      const content = payload.content;
      state[index].content = content;
    },
  },
});

export const { setTodo, setTodos, removeTodo, toggleTodoIsDone, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
