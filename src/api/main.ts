import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT)
    .then(() => console.log('> Server listening at http://localhost:' + PORT));
}
bootstrap();
