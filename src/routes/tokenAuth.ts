import express from 'express';
import jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/api/auth/token/', (req, res) => {
  const bearToken = req.headers['authorization'];
  if (bearToken == null) return;
  const bearer = bearToken.split(' ');
  const token = bearer[1];

  jwt.verify(token, 'secret', (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      return res.json({
        user,
      });
    }
  });
});
export { router as tokenAuth };
