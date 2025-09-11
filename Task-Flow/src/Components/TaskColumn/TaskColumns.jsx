import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumns.css";

const TaskColumns = ({ title, icon, tasks, status, handleDelete }) => {
  console.log(tasks);
  return (
    <div className="task-card">
      <section className="task-column">
        <h2 className="task-column-heading">
          {icon && <img src={icon} alt="" className="task-column-icon" />}
          {title}
        </h2>
        {tasks.map(
          (t, i) =>
            t.status === status && (
              <TaskCard
                key={i}
                title={t.task}
                tags={t.tags}
                handleDelete={handleDelete}
                index={i}
              />
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumns;
