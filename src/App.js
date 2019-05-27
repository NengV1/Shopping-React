import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Home from "./continers/Home";
import About from "./continers/About";
import Order from "./order/Order";
import Product from "./product/Product";
import NotFound from "./error/NotFound";
import ProductEdit from "./components/product/ProductEdit";

class App extends Component {


  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/add" component={ProductEdit} />
        <Route exact path="/product/edit/:id" component={ProductEdit} />
        <Route component={NotFound}></Route>
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
