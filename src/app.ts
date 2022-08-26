import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import { allDeviceRouter } from './routes/device/all';
import { deleteDeviceRouter } from './routes/device/delete';

const app = express();
app.use(express.json());

// ルート
app.use(allDeviceRouter);
app.use(deleteDeviceRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
