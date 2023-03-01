import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CardPostEntity } from '../models/post.entity';
import { CardPost } from '../../../dist/card/models/post.interface';
import { Observable } from 'rxjs';
export declare class CardService {
    private readonly cardPostRepos;
    constructor(cardPostRepos: Repository<CardPostEntity>);
    createPost(cardPost: CardPost): Observable<CardPost>;
    findAllCard(): Observable<CardPost[]>;
    findCardById(id: number): Observable<CardPost>;
    findCardByColor(color: string): Observable<CardPost[]>;
    findCardByName(name: string): Observable<CardPost[]>;
    findCardByMulti(name: string, color: string): Observable<CardPost[]>;
    updateCard(id: number, cardPost: CardPost): Observable<UpdateResult>;
    deleteCart(id: number): Observable<DeleteResult>;
}
