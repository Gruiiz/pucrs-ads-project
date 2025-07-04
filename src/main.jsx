import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);