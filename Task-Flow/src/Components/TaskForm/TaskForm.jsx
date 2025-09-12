import { useState } from "react";
import Tag from "../Tag/Tag";
import "./TaskForm.css";
import { allTags } from "../../Constants/Constants";

const TaskForm = ({ setTask }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const checkedTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "Ready for Development",
      tags: [],
    });
  };

  const selectedTag = (tag) => {
    setTaskData((prev) => {
      const updatedTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];

      return { ...prev, tags: updatedTags };
    });
  };
  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task-input"
          placeholder="Enter task details"
          onChange={handleChange}
        />
        <div className="bottom">
          <div className="tag-name">
            {allTags.map((tag) => (
              <Tag
                key={tag}
                tagName={tag}
                selectedTag={selectedTag}
                selected={taskData.tags.includes(tag)}
              />
            ))}
          </div>
          <div className="bottom-right">
            <select
              className="task-status"
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready to Test">Ready to Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button
              type="submit"
              className="task-submit"            >
              +Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
