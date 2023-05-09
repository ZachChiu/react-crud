import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../store/todos/todosSlice.js";
import { LEVELS } from "../constant/Levels.js";

const defaultFormFields = {
  title: "",
  content: "",
  level: LEVELS.ROUTINE,
};

const TodoForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleReset = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formFields.title && formFields.content) {
      dispatch(setTodo(formFields));
      handleReset();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="PLEASE INPUT TODO'S TITLE"
            value={formFields.title}
            onChange={handleChange}
          />
          <label htmlFor="title" className="form-label">
            TITLE
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            placeholder="PLEASE INPUT TODO'S CONTENT"
            value={formFields.content}
            onChange={handleChange}
          />
          <label htmlFor="content" className="form-label">
            CONTENT
          </label>
        </div>

        <div className="form-floating mb-4 mb-md-5">
          <select
            className="form-select"
            id="level"
            name="level"
            value={formFields.level}
            onChange={handleChange}
          >
            <option value="ROUTINE">ROUTINE</option>
            <option value="IMPORTANT">IMPORTANT</option>
            <option value="URGENT">URGENT</option>
          </select>
          <label htmlFor="level" className="form-label">
            LEVEL
          </label>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-secondary me-3"
            onClick={handleReset}
          >
            CLEAR
          </button>
          <button type="submit" className="btn btn-success ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
