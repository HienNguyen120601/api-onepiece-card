/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('card_post')
export class CardPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    name: string;
    @Column({ default: "" })
    img: string;
    @Column({ default: "" })
    color: string;
    @Column({ default: "" })
    power: string;
    @Column({ default: "" })
    effect: string;
    @Column({ default: "" })
    attribute: string;

}