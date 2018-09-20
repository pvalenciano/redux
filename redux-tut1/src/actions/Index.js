import { SET_CART, EXIT_CART, EXIT_DETAIL, UPDATE_USER, EDIT_PRODUCT, DELETE_PRODUCT, UPDATE_OPENDETAIL } from '../constants/action-types';

export const updateUserAction = (name, email) => ({
    // type: 'updateUser',
    // payload: {
    //     user,
    // }
    type: UPDATE_USER,
    payload: {
        name,
        email
    }
});

export const updateOpenDetail = (product_id) => ({
    type: UPDATE_OPENDETAIL,
    payload: {
        product_id
    }

});

export const exitFromOpenDetail = (openDetail) => ({
    type: EXIT_DETAIL,
    payload: {
        openDetail: null
    }

});

export const setOpenCart = (openCart) => ({
    type: SET_CART,
    payload: {
        openCart: true
    }

});

export const exitFromCart = (openCart) => ({
    type: EXIT_CART,
    payload: {
        openCart: false
    }

});