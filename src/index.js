import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBArQjAlbl0-nA4BFUb6MUBWgVX4dQXo4I",
  authDomain: "my-react-blog-1b40d.firebaseapp.com",
  projectId: "my-react-blog-1b40d",
  storageBucket: "my-react-blog-1b40d.appspot.com",
  messagingSenderId: "774263345447",
  appId: "1:774263345447:web:0eb22e605ab5dfe8049902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
