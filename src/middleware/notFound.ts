import { NextFunction, Request, Response } from 'express';
import * as createError from 'http-errors';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(createError(404));
};
