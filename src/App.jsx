import React from 'react'
import Home from '../components/Home'
import { Routes, Route } from 'react-router-dom';
import Contactus from "../components/Contactus";
import Aboutus from '../components/Aboutus';

const App = () => {
  return (
    <div>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<Contactus/>} />
       </Routes>
    </div>
  )
}

export default App
