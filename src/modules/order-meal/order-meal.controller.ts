import { Controller, Get } from '@nestjs/common';
import { OrderMealService } from './order-meal.service';

@Controller('order-meal')
export class OrderMealController {
  constructor(private readonly orderMealService: OrderMealService) {}

  @Get('/push')
  public async push() {
    return this.orderMealService.pushOrderMealMessage();
  }

  @Get('/mock-push')
  public async mockPush() {
    return this.orderMealService.mockPushOrderMealMessage();
  }

  @Get()
  public queryGoods() {
    return this.orderMealService.queryGoods();
  }
}
