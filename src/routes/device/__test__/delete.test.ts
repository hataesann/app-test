import request from 'supertest';
import { app } from '../../../app';

it('[delete:/api/device/:id] リッスン', async () => {
  const id = 'test';
  const response = await request(app).delete(`/api/device/${id}`);
  expect(response.status).not.toEqual(404);
});

it('[delete:/api/device/:id] (コード:400) 無効なデータ', async () => {
  const id = '77fbc0f3-8d14-4484-93a3-347e3fd5acc4';

  // body empty
  const res1 = await request(app).delete(`/api/device/${id}`).expect(400);
  console.log(res1.body);

  //
  const res2 = await request(app).delete(`/api/device/ERRORID`).send({ version: 0 }).expect(400);
  console.log(res2.body);
});

it('[delete:/api/device/:id] (コード:204) 削除', async () => {
  const id = '77fbc0f3-8d14-4484-93a3-347e3fd5acc4';
  const res = await request(app).delete(`/api/device/${id}`).send({ version: 0 }).expect(204);
  console.log(res.body);
  // 実際にDBから削除されているか確認する。
});
