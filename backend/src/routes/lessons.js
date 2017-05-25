import express from 'express';
import { lessons as controller } from '../controllers';

const router = express.Router();

router.get('/', controller.getLessons);

router.get('/:id', controller.getExercisesById);

export default router;


