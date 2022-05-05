import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvBxcYnoKFLzT0zQq5tCffySf-jwbEP7c",
  authDomain: "react-chat-app-aa601.firebaseapp.com",
  databaseURL: "https://react-chat-app-aa601-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-aa601",
  storageBucket: "react-chat-app-aa601.appspot.com",
  messagingSenderId: "1026715822296",
  appId: "1:1026715822296:web:32310d881b4e02bfc48fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
