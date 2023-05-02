import dayjs from "dayjs";
import { LEVELS } from "../constant/Levels.js";
const TodoList = ({ todos, onDeleteHandler }) => {
  console.log("todolist render");

  const handleDelete = (index) => {
    console.log(index);
    // onDeleteHandler();
  };
  const getCardTypeClass = (todo) => {
    let type = "";
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
    console.log(type);
    return `badge ${type}`;
  };

  return todos.length ? (
    <div className="row row-cols-1 row-cols-lg-3">
      {todos.map((todo, index) => {
        return (
          <div className="col mb-3 mb-md-5" key={todo.createdAt}>
            <div className="card shadow-sm text-bg-light">
              <h5 className="card-header text-center">{todo.title}</h5>
              <div className="card-body">
                <h5 className="card-title">{todo.content}</h5>

                <div className="btn-group ">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={handleDelete}
                  >
                    更新
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleDelete}
                  >
                    刪除
                  </button>
                </div>
              </div>
              <div className="card-footer d-flex align-items-start justify-content-between">
                <small className="text-body-secondary">
                  {dayjs(todo.createdAt).format("YYYY/MM/DD HH:MM")}
                </small>
                <span class={getCardTypeClass(todo)}>{todo.level}</span>
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
