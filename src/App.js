import TodoForm from "./components/TodoForm.jsx";
import Todo from "./components/Todo.jsx";

import { useEffect } from "react";
import "./App.scss";

import dayjs from "dayjs";
import { LEVELS } from "./constant/Levels.js";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "./store/todos/todosSlice.js";

const defaultTodo = {
  title: "BUY A CAKE FOR MOM",
  content: "MOM LOVE HONGYEHCAKE. LET'S BUY ONE",
  createdAt: dayjs().valueOf(),
  level: LEVELS.ROUTINE,
  isDone: false,
};

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    dispatch(setTodos((localTodos || []).length ? localTodos : [defaultTodo]));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-5">REACT TODO LIST</h1>
      <TodoForm />
      <hr className="my-5" />
      {todos.length ? (
        <div className="row row-cols-1 row-cols-lg-3">
          {todos.map((todo, index) => {
            return <Todo todo={todo} index={index} key={todo.createdAt} />;
          })}
        </div>
      ) : (
        <h3 className="text-center font-weight-bold text-secondary">
          EMPTY...
        </h3>
      )}
    </div>
  );
}

export default App;
