import express from 'express';

import { getLesson1 , createLesson1 } from '../controller/lessonRelation1.js';

const router = express.Router();

router.get('/', getLesson1)
router.post('/', createLesson1)

export default router;