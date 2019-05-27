import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import App from "./App";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
