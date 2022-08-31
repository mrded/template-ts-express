import { NextFunction, Request, Response } from 'express';
import { logger } from '../common/logger';

export const errorHandler = (
  err: Error & { status?: number },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    // Custom error handler doesn't work without calling the default error handler.
    return next(err);
  }

  const status = err.status || 500;

  logger.error({ err, req }, 'request error');

  res.status(status).json({ code: status, message: err.message });
};
