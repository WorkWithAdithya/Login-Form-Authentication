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


import { initializeApp } from 'firebase/app';

//Copy all the below information from firebase
const firebaseConfig = {
  apiKey: 'ENTER YOUR API KEY',
  authDomain: 'ENTER AUTHENTICATION DONAIN',
  projectId: 'PROJECT ID',
  storageBucket: 'STORAGE BUCKET ID',
  messagingSenderId: 'MESSAGE SENDER ID',
  appId: 'YOUR APP ID',
  measurementId: 'MEASURMENT ID',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
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
