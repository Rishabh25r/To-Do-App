import './TaskCard.css';

export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <small>Priority: {task.priority}</small>
    </div>
  );
}
