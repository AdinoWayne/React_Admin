import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers/index';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    return applyMiddleware(myRouterMiddleware, createLogger())
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));
