import { Module } from '@nestjs/common';
import { OrderMealModule } from './order-meal/order-meal.module';

@Module({
  imports: [OrderMealModule],
})
export class MainModule {}
