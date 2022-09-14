import { Request, Response } from 'express';

type RequestBodyAuthDto = {
  userName: string;
  password: string;
};

export type RequestAuthDto = Request<RequestBodyAuthDto>;
export type ResponseAuthDto = Response;
