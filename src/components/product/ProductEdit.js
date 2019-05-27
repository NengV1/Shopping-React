import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/product/ProductFrom";
import { connect } from "react-redux";
import { productCreate, productUpdate, productFecth } from "../../actions/ProductActions";

class ProductEdit extends Component {


    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFecth(this.props.match.params.id);
        }

    }



    render() {
        const { formValues, match, productCreate, productUpdate, products } = this.props;
        console.log(match);
        return (
            <div>
                <Header />
                <div className="container col-md-5">

                    {match.path.indexOf("add") > 0 && (
                        <div className="jumbotron">
                            <h1 className="display-4">Add Product</h1>

                            {products.saved && (
                                <div className="alert alert-info title" role="alert">{products.msg}</div>
                            )}
                            < ProductForm onProductSubmit={() => productCreate(formValues)} />

                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 && (

                        <div>
                            <h1 className="display-4">Edit Product</h1>
                            {products.saved && (
                                <div className="alert alert-info title" role="alert">{products.msg}</div>
                            )}
                            < ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />

                        </div>


                    )}


                </div>
                <Footer />
            </div >
        )
    }

}

function mapStateToProps({ form, products }) {
    return { formValues: form.productForm ? form.productForm.values : null, products }
}

export default connect(mapStateToProps, { productCreate, productFecth, productUpdate })(ProductEdit);