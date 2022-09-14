import mongoose from 'mongoose';
import { app } from './app';
import { User } from './db/mongodb';

const start = async () => {
  try {
    await mongoose.connect('mongodb://mongo:mongo@192.168.24.103', {});
    console.log(await User.find());
    //await User.remove({ useName: 'miya', password: '99999' });
  } catch (e) {
    console.error(e);
  }

  // ENVのチェックを行う。
  if (!process.env.NODE_ENV) {
    console.log(process.env.NODE_ENV);
    throw new Error('NODE_ENV が 未入力');
  }

  // プログラム起動処理 (DB kafka の接続処理)
  try {
  } catch (e) {}

  // express server 起動
  app.listen(4000, () => {
    console.log('Listening on port 4000');
  });
};

start();
