import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.TCP,
      options: { port: +process.env.AUTH || 3001 },
    },
  );
  const resp = await app.listen();
  console.log('Resp', resp);
}
bootstrap();
