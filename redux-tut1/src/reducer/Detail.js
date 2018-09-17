import { UPDATE_OPENDETAIL } from '../constants/action-types';

export default function openDetail(state = null, { type, payload }) {
    switch (type) {
        case UPDATE_OPENDETAIL:
            return payload;
        default:
            return state;
    }
}