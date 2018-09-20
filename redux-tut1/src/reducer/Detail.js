import { UPDATE_OPENDETAIL, EXIT_DETAIL } from '../constants/action-types';

export default function openDetail(state = null, { type, payload }) {
    switch (type) {
        case UPDATE_OPENDETAIL:
            return payload;
        case EXIT_DETAIL:
            return null;
        default:
            return state;
    }
}