import { NextFunction, Request, Response } from 'express';
import { logger } from '../common/logger';

export function setupLogging(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();
  const url = req.originalUrl;

  logger.info({ url }, 'Request received');

  res.on('finish', () => {
    logger.info({ url, durationMs: Date.now() - start }, 'Request completed');
  });

  return next();
}
