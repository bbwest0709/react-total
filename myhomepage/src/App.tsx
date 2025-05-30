import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import TodoList from './pages/TodoList';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;