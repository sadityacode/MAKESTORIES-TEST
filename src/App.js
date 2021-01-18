import React, { Component } from "react";
import "./App.css";
import Page from "./page";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { fire } from "./config/fire";
import Routes from "./routes";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Provider history={history} store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
