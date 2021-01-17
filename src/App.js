import React, { Component } from "react";
import "./App.css";
import Page from "./page";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { fire } from "./config/fire";
import Routes from "./routes";

class App extends Component {
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        console.log(null);
      }
    });
  };

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
