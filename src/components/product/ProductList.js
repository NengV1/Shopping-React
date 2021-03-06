import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  showProduct() {
    // if (this.props.products) {
    return (

      this.props.products && this.props.products.map(product => (
        //<ProductItem key={product.id} productName={product.productName} unitPrice={product.unitPrice}/>
        <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct} />
      ))
    );
    //}
  }

  render() {
    return <div className="row">{this.showProduct()}</div>;
  }
}

export default ProductList;
