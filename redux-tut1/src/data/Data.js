import { createStore } from "redux";
import reducer from "../reducer/Index";
import Product from '../reducer/Product';
import User from '../reducer/User';
import _ from 'lodash';
import faker from 'faker';
import txtgen from 'txtgen';
import shortid from 'shortid';
/**
@param {Number} numberOfProducts
@param {Function} generateUser 
@returns {Array}
*/
console.log("store");
export const products = generateProducts(19);
// export const prods = _.mapKeys(products, "product_id");
export const state = {
    user: generateUser(),
    product: generateProduct(19),
    openDetail: null,
    openCart:null
  };
export function generateProduct() {
    return {
        product_id: shortid.generate(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        product_img: faker.image.image(),
        price: faker.commerce.price()
    }
}
export function generateUser() {
    return {
        user_id: shortid.generate(),
        name: faker.internet.userName(),
        user_img: faker.internet.avatar(),
        email: faker.internet.email(),

    }
}
function generateProducts(numberOfProducts) {
    return Array.from({ length: numberOfProducts }, (v, i) => generateProduct(i));
}
