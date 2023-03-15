import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../proto/heroes/hero.proto'),
      loader: {
        includeDirs: [join(__dirname, '../proto')],
      },
    },
  });

  await app.listen();
}
bootstrap();
