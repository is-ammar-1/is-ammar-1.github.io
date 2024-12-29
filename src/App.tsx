import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import FeaturedCollections from './components/collections/FeaturedCollections';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import CollectionPage from './pages/collections/CollectionPage';
import CollectionsPage from './pages/collections/CollectionsPage';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Footer from './components/layout/Footer';
import ChatBot from './components/chat/ChatBot';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your EmailJS public key

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Header />
          <AnimatePresence mode="wait">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route
                  path="/home"
                  element={
                    <>
                      <Hero />
                      <FeaturedCollections />
                      <FeaturedProducts />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/collections/:id" element={<CollectionPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
          <ChatBot />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;