import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumns.css";

const TaskColumns = ({ title, icon }) => {
  return (
    <div className="task-card">
      <section className="task-column">
        <h2 className="task-column-heading">
          {icon && <img src={icon} alt="" className="task-column-icon" />}
          {title}
        </h2>
        <TaskCard />
      </section>
    </div>
  );
};

export default TaskColumns;
