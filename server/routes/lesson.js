import express from 'express';

import { getLesson , createLesson } from '../controller/lessonRelation.js';

const router = express.Router();

router.get('/', getLesson)
router.post('/', createLesson)

export default router;