import { Controller, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject('ORDERS_SERVICE') private client: ClientProxy,
  ) {}

  @MessagePattern({ cmd: 'sum' })
  async accumulate(data: number[]): Promise<string> {
    console.log('Recived', data);
    return this.authService.getHello();
  }

  @EventPattern('user_created')
  async handleUserCreated(@Payload() data: any) {
    try {
      await this?.client?.emit('start_order', data)?.toPromise();
    } catch (e) {
      console.error('error', e);
    }
  }
}
