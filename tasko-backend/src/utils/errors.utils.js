export class ApiError extends Error {
    constructor(statusCode, message, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
      super(404, message);
    }
  }
  
  export class BadRequestError extends ApiError {
    constructor(message = 'Bad Request') {
      super(400, message);
    }
  }
  
  export class UnauthorizedError extends ApiError {
    constructor(message = 'Unauthorized') {
      super(401, message);
    }
  }