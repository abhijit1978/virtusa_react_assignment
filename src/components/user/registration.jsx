import React from "react";

const Registration = () => {
  const handleRegistrationFormChange = (event, newValue) => {
    console.log(event);
    console.log("newValue");
  };

  const handlePasswordMatch = (event, newValue) => {
    console.log("event");
    console.log("newValue");
  };

  const handleRegistrationFormSubmit = () => {
    console.log("event");
    console.log("newValue");
  };

  return (
    <div className="col-sm">
      <h3>User Registration</h3>
      <form onSubmit={handleRegistrationFormSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="fullName"
            placeholder="Enter full name"
            onChange={() => handleRegistrationFormChange()}
            value=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationEmail">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="registrationEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={() => handleRegistrationFormChange()}
            value=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationPassword">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="registrationPassword"
            placeholder="Password"
            onChange={() => handleRegistrationFormChange()}
            value=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="registrationConfirmPassword"
            placeholder="Confirm Password"
            onChange={() => handleRegistrationFormChange()}
            value=""
            onBlur={handlePasswordMatch}
          />
        </div>
        <button className="btn btn-outline-primary btn-lg">Submit</button>
      </form>
    </div>
  );
};

export default Registration;

/*
<div className="form-group">
            <label htmlFor="registrationEmail">Email address</label>
            <input type="email" className="form-control" id="registrationEmail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1">
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

*/
