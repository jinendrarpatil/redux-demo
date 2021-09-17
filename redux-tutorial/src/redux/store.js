import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import redux_thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [redux_thunk];

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    composeWithDevTools(applyMiddleware(...middleware))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
