import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodoIsDone,
  updateTodo,
} from "../store/todos/todosSlice.js";

import { LEVELS } from "../constant/Levels.js";
const Todo = ({ todo, index }) => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todo));
  };

  const handleIsDone = () => {
    dispatch(toggleTodoIsDone(index));
  };

  const handleIsEdit = (value) => {
    setIsEdit(value);
    if (value) {
      setContent(todo.content);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setContent(value);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ index, content }));
    setIsEdit(false);
  };

  const getCardTypeClass = (todo) => {
    let type = "";
    if (todo.isDone) {
      type = "bg-white text-dark";
    } else {
      switch (todo.level) {
        case LEVELS.ROUTINE:
          type = "bg-primary";
          break;
        case LEVELS.IMPORTANT:
          type = "bg-warning";
          break;
        case LEVELS.URGENT:
          type = "bg-danger";
          break;
        default:
          break;
      }
    }

    return `badge ${type}`;
  };

  return (
    <div className="col mb-3 mb-md-5" key={todo.createdAt}>
      <div
        className={`card shadow-sm  ${
          todo.isDone ? "text-bg-secondary" : "text-bg-light"
        }`}
        style={{ transition: "all 0.3s" }}
      >
        <h5 className="card-header fw-bold text-center position-relative text-truncate px-5">
          <i
            className={`bi bi-check-circle position-absolute top-50 start-0 ${
              todo.isDone ? "text-light" : "text-success"
            }`}
            style={{
              cursor: "pointer",
              transform: "translate(50%, -50%)",
            }}
            onClick={handleIsDone}
          ></i>
          <span
            title={todo.title}
            className={todo.isDone ? "text-decoration-line-through" : ""}
          >
            {todo.title.toUpperCase()}
          </span>

          <i
            className={`bi bi-x-circle position-absolute top-50 end-0 translate-middle ${
              todo.isDone ? "text-light" : "text-dark"
            }`}
            style={{
              cursor: "pointer",
            }}
            onClick={handleDelete}
          ></i>
        </h5>
        <div className="card-body">
          {!isEditing ? (
            <p
              className={`card-text  ${
                todo.isDone ? "text-decoration-line-through" : ""
              }`}
            >
              {todo.content}
            </p>
          ) : (
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="update"
                name="update"
                placeholder="PLEASE INPUT TODO'S TITLE"
                value={content}
                onChange={handleChange}
              />
            </div>
          )}

          {!isEditing ? (
            <div className="d-flex justify-content-end">
              <i
                className={`bi bi-pencil-square  ${
                  todo.isDone ? "text-link" : "text-dark"
                }`}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleIsEdit(true)}
              ></i>
            </div>
          ) : (
            <div className="d-flex justify-content-end">
              <i
                className="bi bi-check"
                style={{
                  cursor: "pointer",
                }}
                onClick={handleUpdate}
              ></i>
              <i
                className="bi bi-x"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleIsEdit(false)}
              ></i>
            </div>
          )}
        </div>
        <div className="card-footer d-flex align-items-start justify-content-between">
          <small
            className={`${todo.isDone ? "text-light" : "text-body-secondary"}`}
          >
            {dayjs(todo.createdAt).format("YYYY/MM/DD HH:MM")}
          </small>
          <span className={getCardTypeClass(todo)}>{todo.level}</span>
        </div>
      </div>
    </div>
  );
};
export default Todo;
