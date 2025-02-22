import express from 'express';
import { validateRequest } from '../../middlewares/validate-request';

import UserController from './user.controller';
import { getUserValidation } from './user.schemas';

const userRouter = express.Router();

userRouter.get('/users', UserController.getUsers);
userRouter.get('/users/:id', validateRequest(getUserValidation), UserController.getUser);
userRouter.post('/users', UserController.signUp);

export default userRouter;