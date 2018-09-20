import { SET_CART, EXIT_CART } from '../constants/action-types';

export default function openCart(state = false, { type, payload }) {
    switch (type) {
        case SET_CART:
            return payload;
        case EXIT_CART:
            return false;
        default:
            return state;
    }
}