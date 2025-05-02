import { verifyToken } from '../utils/jwt.utils.js';
import { ApiError } from '../utils/errors.utils.js';

export const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new ApiError(401, 'Access denied');
    
    req.user = verifyToken(token);
    next();
  } catch (err) {
    next(err);
  }
};