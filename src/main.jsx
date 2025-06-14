import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

// Récupère la redirection stockée par le 404.html
const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;

// Applique la redirection dans React une fois monté
if (redirectPath && window.location.pathname === '/') {
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


