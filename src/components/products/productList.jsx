import React, { Component } from "react";
import Product from "./product";
import { connect } from "react-redux";

class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: [
        {
          _id: 1,
          name: "p1",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 2,
          name: "p2",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 3,
          name: "p3",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 4,
          name: "p4",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 5,
          name: "p5",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 6,
          name: "p6",
          price: 10,
          description:
            "description description description description description "
        },
        {
          _id: 7,
          name: "p7",
          price: 10,
          description:
            "description description description description description "
        }
      ]
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="row">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps)(ProductList);
