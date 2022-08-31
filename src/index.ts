import { createApp } from './app';
import { createServer } from './server';
import { logger } from './common/logger';

const processStartTime = Date.now();

const app = createApp();
const server = createServer(app, processStartTime);

app.on('error', async (err) => {
  logger.error({ err }, 'Server error');
});

void (async () => {
  await server.start();
})();
