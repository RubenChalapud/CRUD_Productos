import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_cTCvqWBcRup4ccDxRdzkJLfxZvtJPdY",
  authDomain: "crud-productos-98a8c.firebaseapp.com",
  databaseURL: "https://crud-productos-98a8c-default-rtdb.firebaseio.com",
  projectId: "crud-productos-98a8c",
  storageBucket: "crud-productos-98a8c.appspot.com",
  messagingSenderId: "877082553585",
  appId: "1:877082553585:web:9a21c57a5f3f7e8a4dcd50",
  measurementId: "G-RJ4BTM8RHT"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Conexion con firestore
export const db = fb.firestore();


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
