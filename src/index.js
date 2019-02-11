/* global document */
import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from "./App";
import { store, history } from "./store";

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} ></Route>
      </Switch>
    </Router>
  </Provider>
  ), document.getElementById("root")
);