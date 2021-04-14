import { Request, Response } from 'express'

import { getRepository } from 'typeorm'
import Product from '../models/Product'



export default {
    async create(request: Request, response: Response) {
        const {
            title,
            description,
            price
        } = request.body;

        const productsRepository = getRepository(Product);

        const product = productsRepository.create({
            title,
            description,
            price
        });
        await productsRepository.save(product);
    
    
        return response.status(201).json(product);
    }
}