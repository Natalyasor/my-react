
import React from "react";
import Home from "./conteiner/home";
import About from "./conteiner/About";
import Services from "./conteiner/Services";
import Contact from "./conteiner/Contact";
import Price from "./conteiner/Price";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home />}/>
<Route path = "About" element={<About />}/>
<Route path = "Services" element={<Services />}/>
<Route path = "Contact" element={<Contact />}/>
<Route path = "Price" element={<Price />}/>
    </Routes>
   

 

 </BrowserRouter>
  );
}

export default App;
