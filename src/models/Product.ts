import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image'

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
    
    @OneToMany(() => Image, image => image.product, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'product_id' })
    images: Image[];
}