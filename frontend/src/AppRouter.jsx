// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage, Register } from './pages';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Emprendimientos from './pages/Emprendimientos';
import Estudiantes from './pages/Estudiantes';
import Testimonios from './pages/Testimonios';

import MemoryTest from './pages/memoryTest/MemoTest';
const AppRouter = () => { 

  return (
    <Router basename="/">
      <div className="min-h-screen">
        {/* <Navbar auth={auth} setAuth={setAuth} rol={rol} setRol={setRol}/> */}
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<HomePage auth={auth} />} /> */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/category/:category" element={<CategoryPage />} />
          {/* <Route path="/login" element={<Login auth={auth} setAuth={setAuth} />} /> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/dashboard" element={<Dashboard auth={auth} message={message} />} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/register" element={<Register rol={rol} />} /> */}
          <Route path="/register" element={<Register/>} />
          <Route path="/emprendimientos" element={<Emprendimientos/>} />
          <Route path="/estudiantes" element={<Estudiantes/>} />
          <Route path="/testimonios" element={<Testimonios/>} />
          <Route path="/memoryTest" element={<MemoryTest/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
