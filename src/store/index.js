import { createStore, compose, applyMiddleware } from "redux";

import reducers from "./reducers";
const creatAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = creatAppropriateStore(reducers, compose(applyMiddleware(...[])));

export default store;
