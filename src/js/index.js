import React, { Component } from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "../App";

class Index extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

export default Index;
