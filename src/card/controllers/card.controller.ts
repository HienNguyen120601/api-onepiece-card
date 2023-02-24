import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CardPost } from '../../../dist/card/models/post.interface';
import { Observable } from 'rxjs';
import { CardService } from '../services/card.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) { }
  @Post()
  create(@Body() post: CardPost): Observable<CardPost> {
    return this.cardService.createPost(post);
  }
  @Get()
  findAll(): Observable<CardPost[]> {
    return this.cardService.findAllCard();
  }
  @Get(':id')
  findById(@Param('id') id: number): Observable<CardPost> {
    return this.cardService.findCardById(id);
  }
  @Get('color/:color')
  findByColor(@Param('color') color: string): Observable<CardPost[]> {
    return this.cardService.findCardByColor(color);
  }
  @Get('name/:name')
  findByName(@Param('name') name: string): Observable<CardPost[]> {
    return this.cardService.findCardByName(name);
  }
  @Put(':id')
  update(
    @Body() cardPost: CardPost,
    @Param('id') id: number,
  ): Observable<UpdateResult> {
    return this.cardService.updateCard(id, cardPost);
  }
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.cardService.deleteCart(id);
  }
}
