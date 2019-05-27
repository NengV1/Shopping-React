import axios from "axios";
import { PRODUCTS_FECTH, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_FECTH } from "./type";

export const productFecth = id => {

    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products/" + id).then(
            res => {
                dispatch({ type: PRODUCT_FECTH, payload: res.data });
            }
        )
    }
}


export const productsFecth = () => {

    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/products").then(
            res => {
                dispatch({ type: PRODUCTS_FECTH, payload: res.data });
            }
        )
    }
}


export const productsDelete = id => {

    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "products/" + id).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/products").then(
                res => {
                    dispatch({ type: PRODUCTS_FECTH, payload: res.data })
                }
            )
        }
        )
    }

}

export const productCreate = values => {

    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/products", values).then(
            res => {
                dispatch({ type: PRODUCT_CREATE });
            }
        )
    }
}


export const productUpdate = (id, values) => {

    return dispatch => {
        axios.put("http://localhost:3001/products/" + id, values).then(
            res => {
                dispatch({ type: PRODUCT_UPDATE, payload: res.data });
            }
        )
    }
}