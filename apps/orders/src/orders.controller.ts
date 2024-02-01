import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Ctx, EventPattern, Payload, TcpContext } from '@nestjs/microservices';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.ordersService.getHello();
  }

  @EventPattern('start_order')
  async handleUserCreated(@Payload() data: any, @Ctx() context: TcpContext) {
    // business logic
    console.log('Recived Data creating order', data, context);
  }
}
