import { NextFunction, Request, Response } from 'express';

export async function healthcheck(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.status(200).json({
      ok: true,
      timestamp: Date.now(),
    });
  } catch (err) {
    next(err);
  }
}
