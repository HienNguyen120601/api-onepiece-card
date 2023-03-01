import { CardPost } from '../../../dist/card/models/post.interface';
import { Observable } from 'rxjs';
import { CardService } from '../services/card.service';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class CardController {
    private cardService;
    constructor(cardService: CardService);
    create(post: CardPost): Observable<CardPost>;
    findAll(): Observable<CardPost[]>;
    findById(id: number): Observable<CardPost>;
    findByColor(color: string): Observable<CardPost[]>;
    findByName(name: string): Observable<CardPost[]>;
    findCardByMulti(name: string, color: string): Observable<CardPost[]>;
    update(cardPost: CardPost, id: number): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
