/* eslint-disable prettier/prettier */
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
        private readonly cardPostRepos: Repository<CardPostEntity>
    ) {
    }
    createPost(cardPost: CardPost): Observable<CardPost> {
        return from(this.cardPostRepos.save(cardPost))
    }
    findAllCardPagination(limit: number, page: number): Observable<CardPost[]> {
        // return from(this.cardPostRepos.find());

        return from(this.cardPostRepos.createQueryBuilder().orderBy("id").offset(limit * (page - 1)).limit(limit).getMany())
    }
    findAllCard(): Observable<CardPost[]> {
        return from(this.cardPostRepos.find());
    }
    findCardById(id: number): Observable<CardPost> {
        return from(this.cardPostRepos.findOneBy({ id: id }))
    }
    findCardByColor(color: string): Observable<CardPost[]> {
        return from(this.cardPostRepos.findBy({ color: color }))
    }
    findCardByName(name: string): Observable<CardPost[]> {
        const sql = `name ilike '%${name}%'`
        return from(this.cardPostRepos.createQueryBuilder().where(sql).getMany())
    }
    findCardByMulti(name: string, color: string): Observable<CardPost[]> {
        const sql = `name ilike '%${name}%' and color='${color}'`
        return from(this.cardPostRepos.createQueryBuilder().where(sql).getMany())
    }
    updateCard(id: number, cardPost: CardPost): Observable<UpdateResult> {
        return from(this.cardPostRepos.update(id, cardPost));
    }
    deleteCart(id: number): Observable<DeleteResult> {
        return from(this.cardPostRepos.delete(id));
    }
}
