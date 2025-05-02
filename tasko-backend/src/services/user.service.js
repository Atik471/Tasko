import User from '../models/user.model.js';
import { generateToken } from '../utils/jwt.utils.js';
import {
  BadRequestError,
  UnauthorizedError,
  NotFoundError
} from '../utils/errors.utils.js';

export const registerUser = async (userData) => {
  if (await User.exists({ email: userData.email })) {
    throw new BadRequestError('Email already exists'); 
  }

  return User.create(userData);
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  
  if (!user) {
    throw new UnauthorizedError('Invalid credentials');
  }

  if (!(await user.comparePassword(password))) {
    throw new UnauthorizedError('Invalid credentials');
  }

  return generateToken(user._id);
};

export const getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

export const logoutUser = () => {
  return { message: 'Logged out successfully' };
};