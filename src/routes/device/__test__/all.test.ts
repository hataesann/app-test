import request from 'supertest';
import { app } from '../../../app';

it('[get:/api/device] リッスン', async () => {
  const response = await request(app).get('/api/device');
  expect(response.status).not.toEqual(404);
});

it('[get:/api/device] (コード:200) 取得', async () => {
  const saveData = [
    {
      id: '77fbc0f3-8d14-4484-93a3-347e3fd5acc4',
      name: 'IP端末　本館２Ｆ　＃１',
      ip: '10.0.11.1',
      version: 0,
    },
    {
      id: '308ac692-4abb-496f-b27b-d6443fe7cfe1',
      name: 'IP端末　本館２Ｆ　＃２',
      ip: '10.0.11.2',
      version: 1,
    },
    {
      id: 'e19cb4ca-c4d4-4663-99fe-0ab06ea25554',
      name: 'IP端末　本館２Ｆ　＃３',
      ip: '10.0.11.3',
      version: 0,
    },
  ];

  const { body } = await request(app).get('/api/device').expect(200);
  expect(body.datas).toHaveLength(saveData.length);
  expect(body.datas[0].id).toBe(saveData[0].id);
  expect(body.datas[1].id).toBe(saveData[1].id);
  expect(body.datas[2].id).toBe(saveData[2].id);
});
