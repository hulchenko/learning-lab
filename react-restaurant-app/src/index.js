import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// grabs App component, add sends it to index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
