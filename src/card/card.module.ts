import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardPostEntity } from './models/post.entity';
import { CardController } from './controllers/card.controller';
import { CardService } from './services/card.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([CardPostEntity])
  ],
  providers: [CardService],
  controllers:[CardController]
})
export class CardModule {}
