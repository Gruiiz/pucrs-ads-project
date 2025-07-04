import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Books from './pages/BooksPage/Books';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/home" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/livros" element={<Books />} />
      <Route path="/cadastrar" element={<Register />} />
    </Routes>
  );
}

export default App;
