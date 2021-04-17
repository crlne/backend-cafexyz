import Product from '../models/Product'
import imagesView from './images_view'

export default {
    render(product: Product) {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: imagesView.renderMany(product.images)
        };
    },

    renderMany(products: Product[]) {
        return products.map(product => this.render(product));
    }
};