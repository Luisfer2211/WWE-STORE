import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CartProvider from './contexts/CartContext';
import { DiscountProvider } from './contexts/DiscountContext';
import './index.css';
import { FavoritesProvider } from './contexts/FavoritesContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <DiscountProvider>
          <CartProvider>
            <ToastContainer position="bottom-left" autoClose={3000} theme="dark" />
            <App />
          </CartProvider>
        </DiscountProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
