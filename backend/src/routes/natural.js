import express from 'express';
import { natural as controller } from '../controllers';

const router = express.Router();

router.post('/', controller.translate);

router.get('/example', controller.getExample);

export default router;
