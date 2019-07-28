import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DefaultHeader from "./components/defaultHeader";
import DefaultFooter from "./components/defaultFooter";
import ProductList from "./components/products/productList";
import UserList from "./components/user/userList";
import LoginRegistration from "./components/user/loginRegistration";
import ProductDetails from "./components/products/productDetails";
import UserDetails from "./components/user/userDetails";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <DefaultHeader />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginRegistration} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/users/:id" component={UserDetails} />
            <Route exact path="/users" component={UserList} />
          </Switch>
        </div>
        <DefaultFooter />
      </React.Fragment>
    );
  }
}

export default App;
