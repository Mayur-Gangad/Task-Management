import "./app.css";
import TaskColumns from "./Components/TaskColumn/TaskColumns";
import TaskForm from "./Components/TaskForm/TaskForm";
import ChcekIcon from "../src/assets/checked.png";

const App = () => {
  return (
    <>
      <div className="app">
        <h2 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h2>
        <TaskForm />
        <main className="app-main">
          <TaskColumns title="Ready for Development" />
          <TaskColumns title="In Progress" />
          <TaskColumns title="Ready to Test" />
          <TaskColumns title="Closed" icon={ChcekIcon} />
        </main>
      </div>
    </>
  );
};

export default App;
