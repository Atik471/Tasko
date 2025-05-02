import {
    registerUser,
    loginUser,
    logoutUser,
    getUserById
  } from '../services/user.service.js';
  
  export const register = async (req, res, next) => {
    try {
      const user = await registerUser(req.body);
      res.status(201).json({ user });
    } catch (err) {
      next(err);
    }
  };
  
  export const login = async (req, res, next) => {
    try {
      const token = await loginUser(req.body.email, req.body.password);
      res.json({ token });
    } catch (err) {
      next(err);
    }
  };
  
  export const logout = (req, res) => {
    res.json(logoutUser());
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const user = await getUserById(req.params.id);
      if (!user) throw new ApiError(404, 'User not found');
      res.json(user);
    } catch (err) {
      next(err);
    }
  };