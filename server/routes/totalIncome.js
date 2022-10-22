import express from 'express';

import { getIncoms, createTotalIncome } from '../controller/totalIncome.js';

const router = express.Router();

router.get('/', getIncoms)
router.post('/', createTotalIncome)

export default router;
