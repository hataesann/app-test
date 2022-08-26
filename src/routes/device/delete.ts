import express from 'express';
import { body, param } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request';
import { RequestDeleteDto, ResponseDeleteDto } from './dto/delete.dto';

const router = express.Router();

router.delete(
  '/api/device/:id',
  [param('id').isUUID(), body('version').isInt()],
  validateRequest,
  async (req: RequestDeleteDto, res: ResponseDeleteDto) => {
    const { id } = req.params;
    const { version } = req.body;
    console.log(id, version);

    // dataが存在するか確認
    // データが最新の状態か確認
    // 削除処理
    res.status(204).send();
  },
);

export { router as deleteDeviceRouter };
