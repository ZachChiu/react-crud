import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import dayjs from "dayjs";
import { LEVELS } from "./constant/Levels.js";

const defaultFormFields = {
  title: "",
  content: "",
  level: LEVELS.ROUTINE,
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleReset = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = () => {
    if (formFields.title && formFields.content) {
      setTodos([
        ...todos,
        {
          ...formFields,
          createdAt: dayjs().valueOf(),
        },
      ]);
      handleReset();
      console.log(todos);
    }
  };

  const handleDelete = (index) => {
    console.log("刪除");
    const newTodos = JSON.parse(JSON.stringify(todos));
    console.log(newTodos);
    // setTodos(newTodos);
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
      <TodoList todos={todos} onDeleteHandler={handleDelete} />
    </div>
  );
}

export default App;
