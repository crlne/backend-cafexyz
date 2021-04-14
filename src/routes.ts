import { Router } from 'express'
import ProductsController from './controllers/ProductsController'

const routes = Router();

routes.post('/products', ProductsController.create);
    
export default routes;