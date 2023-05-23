import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { CarContextProvider } from './context/CarContext';
import { AdminCarContextProvider } from './context/AdminCarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminCarContextProvider>
    <CarContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </CarContextProvider>
    </AdminCarContextProvider>
  </React.StrictMode>
);

reportWebVitals();
