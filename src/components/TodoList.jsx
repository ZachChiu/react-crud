import dayjs from "dayjs";
import { LEVELS } from "../constant/Levels.js";
const TodoList = ({ todos, onDeleteHandler, onIsDoneHandler }) => {
  const handleDelete = (createdAt) => {
    onDeleteHandler(createdAt);
  };

  const handleIsDone = (index) => {
    onIsDoneHandler(index);
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

  return todos.length ? (
    <div className="row row-cols-1 row-cols-lg-3">
      {todos.map((todo, index) => {
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
                  onClick={() => handleIsDone(index)}
                ></i>
                <span
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
                  onClick={() => handleDelete(todo.createdAt)}
                ></i>
              </h5>
              <div className="card-body">
                <p
                  className={`card-text h5 ${
                    todo.isDone ? "text-decoration-line-through" : ""
                  }`}
                >
                  {todo.content}
                </p>

                <div className="d-flex justify-content-end">
                  <i
                    className={`bi bi-pencil-square  ${
                      todo.isDone ? "text-link" : "text-dark"
                    }`}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={handleDelete}
                  ></i>
                </div>
              </div>
              <div className="card-footer d-flex align-items-start justify-content-between">
                <small
                  className={`${
                    todo.isDone ? "text-light" : "text-body-secondary"
                  }`}
                >
                  {dayjs(todo.createdAt).format("YYYY/MM/DD HH:MM")}
                </small>
                <span className={getCardTypeClass(todo)}>{todo.level}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h3 className="text-center font-weight-bold text-secondary">EMPTY...</h3>
  );
};
export default TodoList;
