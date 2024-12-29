import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Change this from BrowserRouter
import App from './App.tsx';
import './index.css'; // <-- Import your global Tailwind + custom styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter> {/* Change this from BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
