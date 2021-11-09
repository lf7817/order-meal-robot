import { registerAs } from '@nestjs/config';

export const WebhooksConfig = registerAs('webhooks', (): string[] => {
  return process.env.WEBHOOKS.split(';');
});
