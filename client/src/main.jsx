import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PokemonsContextProvider } from './contexts/PokemonsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonsContextProvider>
  </React.StrictMode>
);
