import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Electric from './pages/Electric';
import Notfound from './pages/Notfound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Member from './pages/Member';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/man" element={<Men />} />
          <Route path="/woman" element={<Women />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/member" element={<Member />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
