import { Router } from 'express';
import { healthcheckController } from './healthcheck.controller';

const router = Router();

router.get('/', healthcheckController);

export default router;
