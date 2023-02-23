import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CardPostEntity } from '../models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CardPost } from '../../../dist/card/models/post.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(CardPostEntity)
        private readonly cardPostRepos:Repository<CardPostEntity>
    ){
    }
    createPost(cardPost:CardPost):Observable<CardPost>
    {
        return from(this.cardPostRepos.save(cardPost))
    }
    findAllCard():Observable<CardPost[]>
    {
        return from(this.cardPostRepos.find());
    }
    updateCard(id:number,cardPost:CardPost):Observable<UpdateResult>
    {
        return from (this.cardPostRepos.update(id,cardPost));
    }
    deleteCart(id:number) :Observable<DeleteResult>{
        return from(this.cardPostRepos.delete(id));
    }
}
