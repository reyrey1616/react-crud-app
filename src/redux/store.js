import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
const middlewares = [logger, thunk];
const initialState = {};
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
