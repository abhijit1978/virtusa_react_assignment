import React from "react";

const ProductDetails = props => {
  const { product } = props;

  const handleEditProduct = productId => {
    console.log("product id", productId);
  };

  const handleDeleteProduct = productId => {
    console.log("product id", productId);
  };

  return (
    <div className="row">
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>
        <button
          onClick={() => handleEditProduct(product._id)}
          className="btn btn-sm btn-outline-primary m-2"
        >
          Edit Product
        </button>
        <button
          onClick={() => handleDeleteProduct(product._id)}
          className="btn btn-sm btn-outline-danger m-2"
        >
          Delete Product
        </button>
      </p>
    </div>
  );
};

export default ProductDetails;
