import { UPDATE_USER, EDIT_PRODUCT, DELETE_PRODUCT, UPDATE_OPENDETAIL } from '../constants/action-types';

export const updateUserAction = (user) => ({
    // type: 'updateUser',
    // payload: {
    //     user,
    // }
    type: UPDATE_USER,
    payload:{
        user:'Paulaa'
    }
});

export const updateOpenDetail = (product_id) => ({
    type: UPDATE_OPENDETAIL,
    payload:{
        product_id
    }

});