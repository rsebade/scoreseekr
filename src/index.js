import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const target = document.querySelector('#root');
console.log(store);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();