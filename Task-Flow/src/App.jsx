import "./app.css";
import TaskColumns from "./Components/TaskColumn/TaskColumns";
import TaskForm from "./Components/TaskForm/TaskForm";
import ChcekIcon from "../src/assets/checked.png";
import { useEffect, useState } from "react";

const existingTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(existingTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTaskData = tasks.filter((_, idx) => idx !== taskIndex);
    setTasks(newTaskData);
  };

  const onDropHandler = (status, index) => {

    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];

    const updatedTask = tasks.filter((_, idx) => idx !== activeCard);

    updatedTask.splice(index, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTask);
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
            setActiveCard={setActiveCard}
            onDropHandler={onDropHandler}
          />
          <TaskColumns
            tasks={tasks}
            title="In Progress"
            status="In Progress"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDropHandler={onDropHandler}
          />
          <TaskColumns
            tasks={tasks}
            title="Ready to Test"
            status="Ready to Test"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDropHandler={onDropHandler}
          />
          <TaskColumns
            tasks={tasks}
            title="Closed"
            icon={ChcekIcon}
            status="Closed"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDropHandler={onDropHandler}
          />
        </main>
      </div>
    </>
  );
};

export default App;
