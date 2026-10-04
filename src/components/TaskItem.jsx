function TaskItem({ task, onToggle, onDelete }) {
  return <div className={`task ${task.completed ? "completed" : ""}`}>
    <label><input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} /><span>{task.title}</span></label>
    <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
  </div>;
}
export default TaskItem;