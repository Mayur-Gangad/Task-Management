import DropArea from "../DropArea/DropArea";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumns.css";
import React from "react";

const TaskColumns = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDropHandler,
}) => {
  return (
    <div className="task-card">
      <section className="task-column">
        <h2 className="task-column-heading">
          {icon && <img src={icon} alt="" className="task-column-icon" />}
          {title}
        </h2>
        <DropArea
          onDropHandler={() => {
            onDropHandler(status, 0);
          }}
        />

        {tasks.map(
          (t, i) =>
            t.status === status && (
              <React.Fragment key={i}>
                <TaskCard
                  key={i}
                  title={t.task}
                  tags={t.tags}
                  handleDelete={handleDelete}
                  index={i}
                  setActiveCard={setActiveCard}
                />
                <DropArea
                  onDropHandler={() => {
                    onDropHandler(status, i + 1);
                  }}
                />
              </React.Fragment>
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumns;
