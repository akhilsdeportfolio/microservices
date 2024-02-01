import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private client: ClientProxy,
  ) { }

  @Get()
  async getHello(): Promise<string> {
    await this.client.emit('user_created', { date: Date.now() }).toPromise();
    return 'Triggered';
  }
}
