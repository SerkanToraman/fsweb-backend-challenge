import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

//export const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger)));
