import * as dotenv from 'dotenv';

export type Config = {
  PORT: number;
};

export const config = dotenv.config().parsed as unknown as Config;
