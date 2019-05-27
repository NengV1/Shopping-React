import { combineReducers } from "redux";
import ProductReduces from "./ProductReduces";
import OrderReduces from "./OrderReduces";
import { reducer as reduxFrom } from "redux-form";

const rootReducers = combineReducers({

    orders: OrderReduces,
    products: ProductReduces,
    form: reduxFrom
})

export default rootReducers;

