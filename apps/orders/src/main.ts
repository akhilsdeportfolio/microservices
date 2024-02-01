import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(OrdersModule, {
    transport: Transport.TCP,
    options: { port: process.env.ORDERS || 3002 },
  });
  await app.listen();
}
bootstrap();
