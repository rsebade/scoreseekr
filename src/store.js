import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createBrowserHistory } from 'history';
import rootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk];


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);
