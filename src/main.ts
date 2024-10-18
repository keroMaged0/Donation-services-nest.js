import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfig } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = envConfig.port;
  await app.listen(port);
  console.log(`Server started on http://localhost:${port}`);
}

bootstrap();
