import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
