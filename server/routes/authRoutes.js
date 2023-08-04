import express from "express";
import { getUser, setUser } from "../controllers/users.js";
import cors from 'cors'


const router = express.Router();


router.post('/register',setUser)
router.post('/login',getUser)

export default router;