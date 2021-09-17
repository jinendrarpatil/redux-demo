import { LOGIN_REQUEST } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
  },
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
