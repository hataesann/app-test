import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

/**
 * エラー取得時の処理 (error レスポンスを返す。)
 * @param err
 * @param _req
 * @param res
 * @param _next
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(500).send({
    errors: [{ message: '未想定のエラーが発生しました。' }],
  });
};
