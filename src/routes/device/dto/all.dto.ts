import { Request, Response } from 'express';

type Device = {
  id: string;
  name: string;
  ip: string;
  version: number;
};

type ResponseBodyAllDto = { datas: Device[] };

export type RequestAllDto = Request;
export type ResponseAllDto = Response<ResponseBodyAllDto>;
