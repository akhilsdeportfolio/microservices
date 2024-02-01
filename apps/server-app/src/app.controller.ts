import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // const pattern = { cmd: 'sum' };
    // const payload = {
    //   date: Date.now(),
    //   name: 'akhil',
    //   messages: [{ from: 'akhil', to: 'akki', text: 'hi' }],
    // };
    await this.client.emit('user_created', { date: Date.now() }).toPromise();
    return 'Triggered';
  }
}
