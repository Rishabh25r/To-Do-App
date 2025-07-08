import './Sidebar.css';

export default function Sidebar({ logs }) {
  return (
    <aside className="sidebar">
      <h3>Activity Log</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.description}</li>
        ))}
      </ul>
    </aside>
  );
}