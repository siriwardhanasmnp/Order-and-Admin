import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FarmerPortalRoutes from './FarmerPortalRoutes';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
    <FarmerPortalRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);