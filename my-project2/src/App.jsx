import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Matter from "./Components/Matter";
import Book from "./Components/Book";
import Auth from "./Components/Auth";

import Online from "./Components/Online";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Matter" element={<Matter />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Online" element={<Online />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
