import React from "react";

const Login = props => {
  handleLoginFormSubmit = () => {};

  return (
    <div className="col-sm">
      <h3>User Login</h3>
      <form onSubmit={handleLoginFormSubmit}>
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="loginEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={() => handleLoginFormChange(event, newValue)}
            value=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            onChange={() => handleLoginFormChange(event, newValue)}
            value=""
          />
        </div>

        <button type="submit" className="btn btn-outline-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
