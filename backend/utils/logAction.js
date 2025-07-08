const ActionLog = require('../models/ActionLog');

const logAction = async ({ userId, actionType, taskId, description }) => {
  try {
    await ActionLog.create({
      user: userId,
      actionType,
      taskId,
      description,
    });
  } catch (err) {
    console.error(' Failed to log action:', err.message);
  }
};

module.exports = logAction;