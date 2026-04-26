import express from "express";
import { generateCode } from '../controllers/generation.controller.js';
import authenticate from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.post('/:projectId', generateCode);

export default router;