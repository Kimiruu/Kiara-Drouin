import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.scss'

import Home from './pages/Home'
import Works from './pages/Works'
import Work from './pages/Work'
import About from './pages/About'
import Navbar from './compoments/Navbar'
import Footer from './compoments/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Outlet />}>
          <Route index element={<Works />} />
            <Route path=":name" element={<Work />} />
          </Route>
        <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </BrowserRouter>     
    </>
  )
}

export default App

