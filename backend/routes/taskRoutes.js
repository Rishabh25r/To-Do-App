const express = require('express')
const Task = require ('../models/Task')
const authMiddleware = require('../middleware/authMiddleware')
const logAction = require('../utils/logAction');
const ActionLog = require('../models/ActionLog');
const router = express.Router()

//Creating a new Task
router.post('/' , authMiddleware , async(req , res)=>{
    try{
        const{title , description  , assignedTo , status, priority} = req.body;
        const task = await Task.create({title, description, assignedTo, status, priority  });
                  await logAction({
            userId: req.user.userId,
            actionType: 'CREATE',
            taskId: task._id,
            description: `Created task "${task.title}"`,
          });
          const io = req.app.get('io');
    io.emit('taskCreated', task);
        res.status(201).json(task);
    }catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});
// For reading tasks
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo', 'email');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// For Updating Tasks task
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
                await logAction({
            userId: req.user.userId,
            actionType: 'UPDATE',
            taskId: updatedTask._id,
            description: `Updated task "${updatedTask.title}"`,
          });
     const io = req.app.get('io');
    io.emit('taskUpdated', updatedTask);

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// For deletion of task
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
          await logAction({
        userId: req.user.userId,
        actionType: 'DELETE',
        taskId: req.params.id,
        description: `Deleted a task`,
      });
    const io = req.app.get('io');
    io.emit('taskDeleted', { taskId: req.params.id });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});
router.get('/logs/recent', authMiddleware, async (req, res) => {
  try {
    const logs = await ActionLog.find()
      .sort({ timestamp: -1 })
      .limit(20)
      .populate('user', 'email')
      .populate('taskId', 'title');
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});
module.exports = router;