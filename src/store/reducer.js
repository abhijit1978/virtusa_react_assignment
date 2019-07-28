const initialstate = {
  userInfo: {}
};

const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "loginAction":
      return { ...state };
    case "loginActionSuccess":
      return { ...state, userInfo: action.payload };
    case "loginActionError":
      return { ...state };
  }
};

export default loginReducer;
