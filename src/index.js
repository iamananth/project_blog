import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeNOXe0wCsvozWekp6fkzM-N4ZyhB5D7c",
  authDomain: "react-blog-90879.firebaseapp.com",
  projectId: "react-blog-90879",
  storageBucket: "react-blog-90879.appspot.com",
  messagingSenderId: "163346663934",
  appId: "1:163346663934:web:adff724d0a388bff1fd8af"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
