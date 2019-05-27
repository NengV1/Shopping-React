import { PRODUCTS_FECTH, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_FECTH } from "../actions/type";
export default function (state = [], action) {
    switch (action.type) {
        case PRODUCTS_FECTH:
        case PRODUCT_FECTH: return action.payload;
        case PRODUCT_CREATE: return { saved: true, msg: "บันทึกละ" };
        case PRODUCT_UPDATE: return { ...state, saved: true, msg: "บันทึกละ" };
        default: return state;
    }
}

