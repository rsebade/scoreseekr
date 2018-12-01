import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import firebase from './firebase';

const history = createBrowserHistory();


export default combineReducers({
  router: connectRouter(history),
  firebase
});
