import express from 'express';
import { body } from 'express-validator';
import jwt = require('jsonwebtoken');
import { User } from '../../db/mongodb';
import { NotFoundError } from '../../errors/not-found-error';
import { validateRequest } from '../../middlewares/validate-request';
import { RequestAuthDto, ResponseAuthDto } from './dto/auth.dto';

const router = express.Router();
router.post(
  '/api/auth/singin',
  [body('userName').isString(), body('password').isString()],
  validateRequest,
  async (req: RequestAuthDto, res: ResponseAuthDto) => {
    const { userName, password } = req.body;
    User.create(
      {
        userName,
        password,
      },
      (err) => {
        if (err) throw new NotFoundError();
      },
    );

    const token = jwt.sign({ userName: userName }, 'secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({
      token: token,
      message: '登録成功',
    });
  },
);

export { router as singinRouter };
