import { UPDATE_USER } from '../constants/action-types';

export default function user(state = '', { type, payload }) {
    // switch (type) {
    //     case 'updateUser':
    //         return payload

    //     default:
    //         break;
    // }
    switch (type) {
        case UPDATE_USER:

            return payload

        default:
            return state;
    }

}