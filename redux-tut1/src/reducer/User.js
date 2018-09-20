import { UPDATE_USER } from '../constants/action-types';
import { generateUser } from '../data/Data';

export default function user(state = generateUser(), { type, payload }) {
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