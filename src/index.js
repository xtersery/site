import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Authorize from './components/authorization/Authorize.tsx';
import Login from './components/authorization/Login.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cruise from './components/content/Cruise.jsx';


import './styles/reset.css';
import './styles/common.css';
import Tours from './components/tours/Tours.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/register" element={<Authorize />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cruise" element={<Cruise/>} />
        <Route path="/tours" element={<Tours />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
