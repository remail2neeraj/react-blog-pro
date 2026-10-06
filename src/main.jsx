import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import GlobalStyles from "./styles/GlobalStyles";
import ThemeProvider from './context/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </StrictMode>
);