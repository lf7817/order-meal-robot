import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get('webhooks')
  getHello(): string[] {
    return this.config.get('webhooks') || [];
  }
}
