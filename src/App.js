import React from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import store from "./store";
import TodoList from "./TodoList";

console.tron.error("tati");
console.tron.warn("tati");
console.tron.log("tati");
const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
