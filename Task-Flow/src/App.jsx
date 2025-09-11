import "./app.css";
import TaskColumns from "./Components/TaskColumn/TaskColumns";
import TaskForm from "./Components/TaskForm/TaskForm";
import ChcekIcon from "../src/assets/checked.png";
import { useEffect, useState } from "react";

const existingTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(existingTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTaskData = tasks.filter((_, idx) => idx !== taskIndex);
    setTasks(newTaskData);
  };
  return (
    <>
      <div className="app">
        <h2 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h2>
        <TaskForm setTask={setTasks} />
        <main className="app-main">
          <TaskColumns
            tasks={tasks}
            title="Ready for Development"
            status="Ready for Development"
            handleDelete={handleDelete}
          />
          <TaskColumns
            tasks={tasks}
            title="In Progress"
            status="In Progress"
            handleDelete={handleDelete}
          />
          <TaskColumns
            tasks={tasks}
            title="Ready to Test"
            status="Ready to Test"
            handleDelete={handleDelete}
          />
          <TaskColumns
            tasks={tasks}
            title="Closed"
            icon={ChcekIcon}
            status="Closed"
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
};

export default App;
