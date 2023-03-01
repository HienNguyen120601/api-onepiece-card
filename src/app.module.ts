/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "127.0.0.1",
      port: 5432,
      username: "openpg",
      password: "openpgpwd",
      database: "onepiece",
      autoLoadEntities: true,
      synchronize: true
    }),
    CardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
