import { Request, Response } from 'express';

type RequestParamDeleteDto = {
  id: string;
};

type RequestBodyDeleteDto = {
  version: number;
};

export type RequestDeleteDto = Request<RequestParamDeleteDto, undefined, RequestBodyDeleteDto>;
export type ResponseDeleteDto = Response;
