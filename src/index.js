import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard/Dashboard';
import Map from './map/Map';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/raindrop' element={<Navigate to="/raindrop/dashboard" />} />
          
        <Route path="/raindrop" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
