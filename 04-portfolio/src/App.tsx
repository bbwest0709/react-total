import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skils from './pages/Skills';
import Login from './pages/Login';
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <CookiesProvider >
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/skils' element={<Skils />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;