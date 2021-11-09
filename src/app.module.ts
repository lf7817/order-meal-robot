import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.development', '.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
