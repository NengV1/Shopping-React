import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Moitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { } from "../actions";
import { productsFecth } from "../actions";


class Home extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.productsFecth();
  }

  render() {
    return (
      <div>
        <Header />
        <Moitor products={this.props.products} />
        <Footer company="Neng" email="Neng12300@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { productsFecth })(Home);
