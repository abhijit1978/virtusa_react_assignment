import axios from "axios";

export const loginAction = () => async dispatch => {
  dispatch({ type: "loginAction" });
  axios({
    method: "post",
    url: "http://localhost:8001/users/login",
    data: {
      email: "test1@test.com",
      password: "test123"
    },
    config: { headers: { "Content-Type": "application/json" } }
  })
    .then(function(response) {
      console.log(response);
      dispatch({ type: "loginActionSuccess", payload: response });
    })
    .catch(function(error) {
      console.log(error);
      dispatch({ type: "loginActionError" });
    });
};

// export const getAccountInfo = () => async (dispatch) => {
//     dispatch(fetchAccountInfo());
//     const serviceResponse = await fetechMyAccountInfo();
//     if (serviceResponse.length > 0) {
//     dispatch(fetchAccountInfoSuccess(serviceResponse));
//     } else {
//     dispatch(fetchAccountInfoError(serviceResponse.message));
//     }
//     };

// axios({ method: 'post',
// url: 'http://localhost:8001/users/login',
// data: {
//     email: "test1@test.com",
//       password: "test123"
// },
// config: { headers: {'Content-Type': 'application/json' }} })
