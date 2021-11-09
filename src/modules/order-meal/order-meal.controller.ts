import { Controller, Get } from '@nestjs/common';
import { OrderMealService } from './order-meal.service';

@Controller('order-meal')
export class OrderMealController {
  constructor(private readonly orderMealService: OrderMealService) {}

  @Get('/push')
  public async push() {
    return this.orderMealService.pushOrderMealMessage();
  }

  @Get()
  public queryGoods() {
    return this.orderMealService.queryGoods();
  }
}
