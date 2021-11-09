import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OrderMealController } from './order-meal.controller';
import { OrderMealService } from './order-meal.service';

@Module({
  imports: [HttpModule.register({ timeout: 10000, maxRedirects: 5 })],
  controllers: [OrderMealController],
  providers: [OrderMealService],
  exports: [OrderMealService],
})
export class OrderMealModule {}
