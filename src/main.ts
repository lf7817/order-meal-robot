import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 获取配置文件service
  const configService = app.get(ConfigService);
  await app.listen(configService.get('app.port'), '0.0.0.0');
}
bootstrap();
