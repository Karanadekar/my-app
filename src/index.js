import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import theme from "./theme";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
