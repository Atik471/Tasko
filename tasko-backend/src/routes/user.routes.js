import express from 'express';
import {
  register,
  login,
  logout,
  getUser
} from '../controllers/user.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const userRoutes = express.Router();

userRoutes.post('/register', register);
userRoutes.post('/login', login);

// protected with jwt token
userRoutes.post('/logout', authenticate, logout);
userRoutes.get('/:id', authenticate, getUser);

export default userRoutes;