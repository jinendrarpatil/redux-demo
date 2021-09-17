import { combineReducer } from "redux";
import loginReducer from "./loginReducer";

const rootReducer = combineReducer({
  loginReducer: loginReducer,
});

export default rootReducer;
