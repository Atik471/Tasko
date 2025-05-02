import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from '../controllers/task.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const taskRoutes = express.Router();

// jwt protection for all routes
taskRoutes.use(authenticate);

taskRoutes.post('/', createTask);
taskRoutes.get('/', getTasks);
taskRoutes.patch('/:id', updateTask);
taskRoutes.delete('/:id', deleteTask);

export default taskRoutes;