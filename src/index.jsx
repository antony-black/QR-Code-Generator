import React from 'react';
import ReactDOM from 'react-dom/client';
import QRCodeGenerator from './QRCodeGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QRCodeGenerator />
  </React.StrictMode>,
);
