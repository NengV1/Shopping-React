import React, { Component } from "react";

class ProductItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} />
        <h5 className="mt-2">{productName}</h5>
        <p className="title text-right" >{unitPrice} THB</p>

        {this.props.onAddOrder &&
          <button className="btn  btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)} >
            ซื้อ
        </button>
        }

        {(this.props.onDelProduct || this.props.oneEditProduct) &&
          <button className="btn  btn-info title col-5" onClick={() => this.props.onEditProduct(this.props.product)} >
            แก้
        </button>
        }

        {this.props.onDelProduct &&
          <button className="btn btn-block btn-danger title col-5 float-right" onClick={() => this.props.onDelProduct(this.props.product)} >
            ลบ
        </button>
        }
        <hr />
      </div>
    )
  }
}

export default ProductItem;