import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { loginRouter } from './routes/auth/login';
import { singinRouter } from './routes/auth/singin';
import { allDeviceRouter } from './routes/device/all';
import { deleteDeviceRouter } from './routes/device/delete';
import { tokenAuth } from './routes/tokenAuth';

const app = express();
//CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());

//DB

// ルート
app.use(allDeviceRouter);
app.use(deleteDeviceRouter);
app.use(loginRouter);
app.use(singinRouter);
app.use(tokenAuth);
app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
