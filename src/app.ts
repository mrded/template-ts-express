import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as responseTime from 'response-time';
import { setupLogging } from './middleware/logging';
import { notFoundHandler } from './middleware/notFound';
import { errorHandler } from './middleware/error';

import healthcheckRouter from './controllers/healthcheck';

export const createApp = (): express.Express => {
  const app = express();

  app.use(compression());
  app.use(responseTime());

  // parse application/json
  app.use(bodyParser.json());

  app.use('/healthcheck', healthcheckRouter);

  app.use(setupLogging);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
