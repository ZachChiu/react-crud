const TodoForm = ({
  onSubmitHandler,
  onChangeHandler,
  onResetHandler,
  formFields,
}) => {
  const handleChange = (event) => {
    onChangeHandler(event);
  };
  const handleReset = () => {
    onResetHandler();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler();
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
