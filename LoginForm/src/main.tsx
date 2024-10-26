import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import Login from './Login.tsx';
import Signup from './Signup.tsx';
import AuthRoute from './AuthRoute.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCRUH68axTPJOzm-h1wTUQ0gYtm4vzyYT8',
  authDomain: 'authentication-1584f.firebaseapp.com',
  projectId: 'authentication-1584f',
  storageBucket: 'authentication-1584f.appspot.com',
  messagingSenderId: '643370515265',
  appId: '1:643370515265:web:e77c5a4718b06df0eb3fc0',
  measurementId: 'G-4SZ4W98J9C',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <App />
            </AuthRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
