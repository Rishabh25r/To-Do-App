import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import KanbanBoard from '../components/KanbanBoard';
import './BoardPage.css';

const socket = io('http://localhost:5000'); // Update if deployed


function BoardPage() {
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'Todo',
    priority: 'Low',
  });

  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  // Load tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(res.data);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    };

    fetchTasks();

    // Real-time event listeners
    socket.on('taskCreated', (task) => {
      setTasks((prev) => [...prev, task]);
    });

    socket.on('taskUpdated', (updated) => {
      setTasks((prev) =>
        prev.map((task) => (task._id === updated._id ? updated : task))
      );
    });

    socket.on('taskDeleted', ({ taskId }) => {
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    });
     const fetchLogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks/logs/recent', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLogs(res.data);
    } catch (err) {
      console.error('Failed to fetch logs:', err);
    }
  };

  fetchLogs();
    return () => {
      socket.off('taskCreated');
      socket.off('taskUpdated');
      socket.off('taskDeleted');
    };
  }, [token]);

  // Create task
  const handleCreate = async () => {
    try {
      await axios.post(
        'http://localhost:5000/api/tasks',
        newTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewTask({ title: '', description: '', status: 'Todo', priority: 'Low' });
    } catch (err) {
      console.error('Task creation failed:', err);
    }
  };
  // Handle status update after drag
const handleStatusChange = async (taskId, newStatus) => {
  const updated = tasks.map((task) =>
    task._id === taskId ? { ...task, status: newStatus } : task
  );
  setTasks(updated);

  try {
    await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { status: newStatus }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (err) {
    console.error('Failed to update task status:', err);
  }
};
  return (
     <div className="board-wrapper">
      <Navbar user={user}/>
      <div className="main-area">
        <Sidebar logs={logs}/>
        <div className="content-area">
          <div className="task-form">
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button onClick={handleCreate}>Create Task</button>
          </div>
        <KanbanBoard tasks={tasks} onStatusChange={handleStatusChange} />

      </div>
    </div>
    </div>
  );
}

export default BoardPage;
