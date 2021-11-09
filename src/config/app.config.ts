import { registerAs } from '@nestjs/config';

export type AppConfgType = {
  port: number;
};

export const AppConfig = registerAs(
  'app',
  (): AppConfgType => ({
    port: Number(process.env.PORT) || 4000,
  }),
);
