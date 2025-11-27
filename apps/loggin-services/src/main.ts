import { NestFactory } from '@nestjs/core';
import { LogginServicesModule } from './loggin-services.module';

async function bootstrap() {
  const app = await NestFactory.create(LogginServicesModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
