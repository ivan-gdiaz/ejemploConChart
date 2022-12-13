import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Layout from "./Layout.jsx"
import PersonList from "./PersonList.jsx"
import GrupoBotones from "./GrupoBotones.jsx"
import Acordeon from "./Acordeon.jsx"
import EjemploCards1 from "./EjemploCards1.jsx"
import EjemploCards2 from "./EjemploCards2.jsx"
import NotFound from "./NotFound.jsx"
import ChartTest from "./Chart.jsx"
import Radar from "./Radar.jsx"

function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}> {/* Ejemplo con rutas anidadas */}
            <Route index element={< PersonList/>} />     {/* sería el "Home" */}
            <Route path='chart' element={<ChartTest />} />
            <Route path='radar' element={<Radar />} />
            <Route path='botones' element={<GrupoBotones />} />
            <Route path='botones/:id' element={<Acordeon />} />

            <Route path='acordeon' element={<Acordeon />} />
            <Route path='cards1' element={<EjemploCards1 />} />
            <Route path='cards2' element={<EjemploCards2 />} />
            <Route path='no-renderiza' />
            <Route path="*" element={<NotFound />} /> 
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>

          <Route path='/acordeonSinLayout' element={<Acordeon />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
