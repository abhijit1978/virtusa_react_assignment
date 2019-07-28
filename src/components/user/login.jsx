import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginAction from "../../store/action";

class Login extends Component {
  state = {};

  handleLoginFormSubmit = () => {
    this.props.action.loginAction();
  };

  render() {
    return (
      <div className="col-sm">
        <h3>User Login</h3>
        <form>
          <div className="form-group">
            <label htmlFor="loginEmail">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={console.log("hello")}
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
              onChange={console.log("hello")}
              value=""
            />
          </div>

          <button
            onClick={this.handleLoginFormSubmit}
            className="btn btn-outline-primary btn-lg"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // regionInfo: state.CommonReducer.regionInfo,
  // isNotificationVisible: state.CommonReducer.isNotificationVisible
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...loginAction }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

// export default Login;

// onSubmit={handleLoginFormSubmit}

// () => handleLoginFormChange(event, newValue)

//() => handleLoginFormChange(event, newValue)
