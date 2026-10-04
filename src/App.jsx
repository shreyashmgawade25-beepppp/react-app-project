import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React components", completed: true },
    { id: 2, title: "Practice props and data flow", completed: false }
  ]);

  const addTask = (title) => setTasks(t => [...t, { id: Date.now(), title, completed: false }]);
  const toggleTask = (id) => setTasks(t => t.map(x => x.id === id ? {...x, completed: !x.completed} : x));
  const deleteTask = (id) => setTasks(t => t.filter(x => x.id !== id));

  return <div className="app">
    <Header taskCount={tasks.length} />
    <main className="container"><section className="card">
      <h2>My Tasks</h2>
      <p className="subtitle">A simple React application demonstrating components, props and data flow.</p>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </section></main>
  </div>;
}
export default App;