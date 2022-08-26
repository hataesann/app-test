import { app } from './app';

const start = async () => {
  // ENVのチェックを行う。
  if (!process.env.NODE_ENV) {
    console.log(process.env.NODE_ENV);
    throw new Error('NODE_ENV が 未入力');
  }

  // プログラム起動処理 (DB kafka の接続処理)
  try {
  } catch (e) {}

  // express server 起動
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();
