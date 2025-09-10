import Tag from "../Tag/Tag";
import "./TaskForm.css";
const TaskForm = () => {
  return (
    <header className="app-header">
      <form>
        <input
          type="text"
          className="task-input"
          placeholder="Enter task details"
        />
        <div className="bottom">
          <div className="tag-name">
            <Tag tagName="Dev" />
            <Tag tagName="QA" />
            <Tag tagName="PO" />
          </div>
          <div className="bottom-right">
            <select className="task-status">
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="task-submit">
              +Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
