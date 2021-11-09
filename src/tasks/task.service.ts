import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { OrderMealService } from 'src/modules/order-meal/order-meal.service';

@Injectable()
export class TasksService {
  constructor(private readonly orderMealService: OrderMealService) {}

  @Cron('0 0 13,14 * *')
  pushOrderMealMessage() {
    this.orderMealService.pushOrderMealMessage();
  }
}
