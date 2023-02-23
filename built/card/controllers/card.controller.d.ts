import { CardPost } from '../../../dist/card/models/post.interface';
import { Observable } from 'rxjs';
import { CardService } from '../services/card.service';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class CardController {
    private cardService;
    constructor(cardService: CardService);
    create(post: CardPost): Observable<CardPost>;
    findAll(): Observable<CardPost[]>;
    update(cardPost: CardPost, id: number): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
