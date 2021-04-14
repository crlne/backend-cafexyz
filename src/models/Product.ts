import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;
}