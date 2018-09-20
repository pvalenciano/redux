import { products } from '../data/Data';
import { DELETE_PRODUCT, EDIT_PRODUCT } from '../constants/action-types';
export default function product(state = products, { type, payload }) {
    // return state;
    switch (type) {

        case DELETE_PRODUCT:
            return "delete";

        case EDIT_PRODUCT:
            return "edit";

        default:
            return state;
    }
}
