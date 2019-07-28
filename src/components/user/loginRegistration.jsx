import React from "react";
import Registration from "./registration";
import Login from "./login";

const LoginRegistration = () => {
  return (
    <div className="row">
      <Login />
      <Registration />
    </div>
  );
};

export default LoginRegistration;
