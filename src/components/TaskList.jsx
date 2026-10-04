import TaskItem from "./TaskItem";
function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (!tasks.length) return <p className="empty">No tasks available. Add a task above.</p>;
  return <div className="task-list">{tasks.map(task => <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />)}</div>;
}
export default TaskList;