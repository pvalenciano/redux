export default function user(state = '', { type, payload }) {
    //(state = '', action)
    switch (type) {
        case 'updateUser':
            return payload

        default:
            break;
    }
    return state;
}