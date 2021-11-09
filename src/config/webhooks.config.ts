import { registerAs } from '@nestjs/config';

export type WebhooksConfigType = string[];

export const WebhooksConfig = registerAs('webhooks', (): WebhooksConfigType => {
  return process.env.WEBHOOKS.split(';');
});
