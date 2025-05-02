import * as taskService from '../services/task.service.js';

export const createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.user.id, req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks(req.user.id);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(
      req.user.id,
      req.params.id,
      req.body
    );
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await taskService.deleteTask(req.user.id, req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};