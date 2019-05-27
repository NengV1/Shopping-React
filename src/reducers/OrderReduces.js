import { ORDERS_FECTH } from "../actions/type";
export default function (state = [], action) {
    switch (action.type) {
        case ORDERS_FECTH: return action.payload;
        default: return state;
    }
}

