import express from 'express';
import { RequestAllDto, ResponseAllDto } from './dto/all.dto';

const router = express.Router();

router.get('/api/device', async (req: RequestAllDto, res: ResponseAllDto) => {
  // DBから取ってきたデータを返信
  res.status(200).send({
    datas: [
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
    ],
  });
});

export { router as allDeviceRouter };
