import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import './App.scss'

import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Navbar from './compoments/Navbar'
import Footer from './compoments/Footer'
import ChromeExtension from "./pages/Works/ChromeExtension";
import CapOuRecap from "./pages/Works/CapOuRecap";
import CatBlender from "./pages/Works/CatBlender";
import KittenRescue from "./pages/Works/KittenRescue";
import LaBergereDeNuage from "./pages/Works/LaBergereDeNuage";
import Mindoor from "./pages/Works/Mindoor";
import OnlyOneLight from "./pages/Works/OnlyOneLight";
import QrcodeHunt from "./pages/Works/QrCodeHunt";
import TheDonut from "./pages/Works/TheDonut";
import TheJollyHotChocolatier from "./pages/Works/TheJollyHotChocolatier";
import ValoDocs from "./pages/Works/ValoDocs";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Outlet />}>
          <Route index element={<Works />} />
            <Route path="/works/CapOuRecap" element={<CapOuRecap />} />
            <Route path="/works/CatBlender" element={<CatBlender />} />
            <Route path="/works/ChromeExtension" element={<ChromeExtension />} />
            <Route path="/works/KittenRescue" element={<KittenRescue />} />
            <Route path="/works/LaBergereDeNuage" element={<LaBergereDeNuage />} />
            <Route path="/works/Mindoor" element={<Mindoor />} />
            <Route path="/works/OnlyOneLight" element={<OnlyOneLight />} />
            <Route path="/works/QrcodeHunt" element={<QrcodeHunt />} />
            <Route path="/works/TheDonut" element={<TheDonut />} /> 
            <Route path="/works/TheJollyHotChocolatier" element={<TheJollyHotChocolatier />} /> 
            <Route path="/works/ValoDocs" element={<ValoDocs />} />
          </Route>
        <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </BrowserRouter>     
    </>
  )
}

export default App

