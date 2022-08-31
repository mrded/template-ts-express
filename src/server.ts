import { Server as HttpServer } from 'http';
import { Express } from 'express';
import { logger } from './common/logger';
import { config } from './common/config';

export type Server = {
  start: () => Promise<void>;
  stop: () => Promise<void>;
};

export const createServer = (
  app: Express,
  startTime: number = Date.now(),
): Server => {
  let serving: HttpServer;

  return {
    start: async () => {
      return new Promise((resolve) => {
        serving = app.listen(config.PORT, () => {
          logger.info(
            {
              port: config.PORT,
              startupDurationMs: Date.now() - startTime,
            },
            'Server started',
          );

          process.on('SIGTERM', () =>
            gracefulShutdown(serving, () => process.exit(0)),
          );
          process.on('SIGINT', () =>
            gracefulShutdown(serving, () => process.exit(0)),
          );

          resolve();
        });
      });
    },
    stop: async () => {
      return new Promise((resolve, reject) => {
        if (!serving) reject(new Error('Server is not ready to be stopped'));

        gracefulShutdown(serving, resolve);
      });
    },
  };
};

const gracefulShutdown = (app: HttpServer, callback: () => unknown): void => {
  logger.info('Shutting down');

  app.close(() => {
    logger.info('HTTP server closed.');

    if (callback) callback();
  });
};
