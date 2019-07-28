import React from "react";

const ProductForm = props => {
  const getSubmitUlr = () => {
    const submitUrl = "";
    if (props.formType == "createProduct") {
      submitUrl = "create-product-url";
    } else if (props.formType == "editProduct") {
      submitUrl = "edit-product-url";
    } else {
      submitUrl = "nothing";
    }

    return submitUrl;
  };

  const handleProductFormSubmit = url => {
    console.log(url);
  };

  return (
    <div className="row justify-content-md-center">
      <div class="col-md-6">
        <h3>{props.formType} Product</h3>
        <form onSubmit={() => handleProductFormSubmit(getSubmitUlr())}>
          <div className="form-group">
            <label htmlFor="productName">Product name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              id="productName"
              placeholder="Enter product name"
              onChange={console.log("hello")}
              value=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <input
              type="text"
              name="price"
              className="form-control"
              id="productPrice"
              placeholder="Enter product name"
              onChange={console.log("hello")}
              value=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
              onChange={console.log("hello")}
              value=""
            />
          </div>

          <button type="submit" className="btn btn-outline-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
