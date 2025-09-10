import "./app.css";
import TaskForm from "./Components/TaskForm/TaskForm";

const App = () => {
  return (
    <>
      <div className="app">
        <h2 style={{ textAlign: "center", margin:"50px" }}>Jira Board</h2>
        <TaskForm />
        <main className="app-main">
          <section className="task-column">section 1</section>
          <section className="task-column">section 2</section>
          <section className="task-column">section 3</section>
          <section className="task-column">section 4</section>
        </main>
      </div>
    </>
  );
};

export default App;
