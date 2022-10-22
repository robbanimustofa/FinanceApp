import express from "express";

import { loginUsers, createUsers } from "../controller/auth.js";

const router = express.Router();

router.post("/login", loginUsers);
router.post("/register", createUsers);

export default router;
