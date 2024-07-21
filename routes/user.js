import { UserController } from '../controllers/user.js';
import { Router } from 'express';

export const userRouter = Router();
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);