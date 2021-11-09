import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { MainModule } from './modules/main.module';
import { TasksModule } from './tasks/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.development', '.env'],
    }),
    ScheduleModule.forRoot(),
    TasksModule,
    MainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
