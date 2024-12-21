import React from 'react';
import { Layout } from './components/Layout';
import { CartProvider } from './context/CartContext';
import { Home } from './pages/Home';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Home />
      </Layout>
    </CartProvider>
  );
}

export default App;