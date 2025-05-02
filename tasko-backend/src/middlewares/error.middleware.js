import {
  ApiError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError
} from '../utils/errors.utils.js';

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    err = new BadRequestError(`Validation failed: ${messages.join(', ')}`);
  } else if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    err = new BadRequestError(`${field} already exists`);
  } else if (err.name === 'CastError') {
    err = new NotFoundError('Invalid resource ID');
  } else if (err.name === 'JsonWebTokenError') {
    err = new UnauthorizedError('Invalid token');
  } else if (!(err instanceof ApiError)) {
    err = new ApiError(err.statusCode, err.message);
  }

  const response = {
    success: false,
    error: err.message,
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      details: err
    })
  };

  res.status(err.statusCode).json(response);
};

export const notFoundHandler = (req, res, next) => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.originalUrl}`));
};