import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyANvqspNZDVo2u_PVtJHbm-BHyDuhIwDPU",
  authDomain: "pruebadeadmisioncovid19.firebaseapp.com",
  databaseURL: "https://pruebadeadmisioncovid19.firebaseio.com",
  projectId: "pruebadeadmisioncovid19",
  storageBucket: "pruebadeadmisioncovid19.appspot.com",
  messagingSenderId: "997108756661",
  appId: "1:997108756661:web:37fab2c7634211beea8efc",
  measurementId: "G-6LTZ4J2627"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
