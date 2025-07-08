const express = require('express')
const Task = require ('../models/Task')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

//Creating a new Task
router.post('/' , authMiddleware , async(req , res)=>{
    try{
        const{title , description  , assignedTo , status, priority} = req.body;
        const task = await Task.create({title, description, assignedTo, status, priority  });
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
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// For deletion of task
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;