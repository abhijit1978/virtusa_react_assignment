import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  const { product } = props;
  return (
    <div className="col-4">
      <h4>{product.name}</h4>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <p>
        <Link
          to={`/products/${product._id}`}
          className="btn btn-sm btn-outline-danger m-2"
        >
          View Details
        </Link>
      </p>
    </div>
  );
};

export default Product;
