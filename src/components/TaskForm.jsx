import { useState } from "react";
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title.trim());
    setTitle("");
  };
  return <form className="form" onSubmit={handleSubmit}>
    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter a new task..." />
    <button type="submit">Add Task</button>
  </form>;
}
export default TaskForm;