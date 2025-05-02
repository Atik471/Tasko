import Task from '../models/task.model.js';
import { NotFoundError } from '../utils/errors.utils.js';

export const createTask = async (userId, taskData) => {
  return Task.create({ ...taskData, createdBy: userId });
};

export const getTasks = async (userId) => {
  return Task.find({ createdBy: userId });
};

export const updateTask = async (userId, taskId, updateData) => {
  const task = await Task.findOneAndUpdate(
    { _id: taskId, createdBy: userId },
    updateData,
    { new: true }
  );
  
  if (!task) throw new NotFoundError('Task not found');
  return task;
};

export const deleteTask = async (userId, taskId) => {
  const task = await Task.findOneAndDelete({ 
    _id: taskId, 
    createdBy: userId 
  });
  
  if (!task) throw new NotFoundError('Task not found');
  return task;
};

