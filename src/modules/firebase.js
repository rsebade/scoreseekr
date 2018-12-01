import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

import { push } from 'connected-react-router';

import * as routes from '../constants/routes';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(firebaseConfig);

const initialState = {
	firebase: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
  	console.log(action);
    
      return state;
  }
}