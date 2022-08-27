import { NextFunction, Request, Response } from 'express';

import { StatusCodes } from '@/configs/status-codes.config';
import { HttpException } from '@errors/http-exception.error';

const ExpressAsyncErrors = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: number = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const message: string = error.message || 'Something went wrong';
 
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default ExpressAsyncErrors;
