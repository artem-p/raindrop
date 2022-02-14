import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard/Dashboard';
import Map from './map/Map';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="map" element={<Map />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
