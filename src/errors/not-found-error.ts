import { CustomError } from './custom-error';

/**
 * Not Found Error 404
 */
export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
