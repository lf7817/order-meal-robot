import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OrderMealModule } from 'src/modules/order-meal/order-meal.module';
import { OrderMealService } from 'src/modules/order-meal/order-meal.service';
import { TasksService } from './task.service';

@Module({
  imports: [OrderMealModule, HttpModule],
  providers: [OrderMealService, TasksService],
})
export class TasksModule {}
