import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import "reflect-metadata";
import { Connection, createConnection } from 'typeorm';
import * as helmet from 'helmet';

async function bootstrap() {
  const connection: Connection = await createConnection();
  const app = await NestFactory.create(AppModule);
 
  app.use(helmet());
  app.enableCors();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(3000);
}
bootstrap();
