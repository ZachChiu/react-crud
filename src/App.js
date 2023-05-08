import TodoForm from "./components/TodoForm.jsx";
import Todo from "./components/Todo.jsx";

import { useState, useEffect } from "react";
import "./App.scss";

import dayjs from "dayjs";
import { LEVELS } from "./constant/Levels.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "./store/todos/todos-selector";
import { setTodos, setTodo } from "./store/todos/todos-action.js";

const defaultFormFields = {
  title: "",
  content: "",
  level: LEVELS.ROUTINE,
};

const defaultTodo = {
  title: "BUY A CAKE FOR MOM",
  content: "MOM LOVE HONGYEHCAKE. LET'S BUY ONE",
  createdAt: dayjs().valueOf(),
  level: LEVELS.ROUTINE,
  isDone: false,
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    dispatch(setTodos((localTodos || []).length ? localTodos : [defaultTodo]));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleReset = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = () => {
    if (formFields.title && formFields.content) {
      dispatch(setTodo(todos, formFields));
      handleReset();
    }
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-5">REACT TODO LIST</h1>
      <TodoForm
        formFields={formFields}
        onSubmitHandler={handleSubmit}
        onChangeHandler={handleChange}
        onResetHandler={handleReset}
      />
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
