import { CustomError } from './custom-error';

/**
 * Not Found Error 401
 */
export class UnauthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not found');

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: '認証に失敗しました' }];
  }
}
