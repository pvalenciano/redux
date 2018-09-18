import { createStore } from "redux";
import reducer from "../reducer/Index";
import Product from '../reducer/Product';
import User from '../reducer/User';
import _ from 'lodash';
import faker from 'faker';
import txtgen from 'txtgen';
import shortid from 'shortid';
/**
@param {Number} numberOfProducts;
*/
console.log("store");
export const products = generateProducts(19);
// export const prods = _.mapKeys(products, "product_id");

export function generateProduct() {
    return {
        product_id: shortid.generate(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        product_img: faker.image.image(),
        price: faker.commerce.price()
    }
}
function generateProducts(numberOfProducts) {
    return Array.from({ length: numberOfProducts }, (v, i) => generateProduct(i));
}
const store = createStore(reducer,
    {
        Product:
            products
        ,
        User: 'Michael el majo'
        ,
        openDetail: null
    },

    //to see on redux devtools
    window.devToolsExtension && window.devToolsExtension()
);
export default store;