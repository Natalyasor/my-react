
import React from "react";
import Home from "./conteiner/home";
import About from "./conteiner/About";
import Services from "./conteiner/Services";
import Contact from "./conteiner/Contact";
import Price from "./conteiner/Price";
import KinderAlbom from "./conteiner/KinderAlbom";
import RetushFoto from "./conteiner/RetushFoto";
import KinderKalendar from "./conteiner/KinderKalendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestavraciaFoto from "./conteiner/RestavraciaFoto";
import VlasniKalendari from "./conteiner/VlasniKalendari";
import SchkolaKalendar from "./conteiner/SchkolaKalendar";
import MyKalendar from "./conteiner/MyKalendar";
import FotoAlbomu from "./conteiner/FotoAlbomu";


function App() {
  
  return ( 
  
    
    <BrowserRouter>
    <Routes>

<Route path = "/" element={<Home />}/>
<Route path = "About" element={<About />}/>
<Route path = "Services" element={<Services />}/>
<Route path = "Contact" element={<Contact />}/>
<Route path = "Price" element={<Price />}/>
<Route path = "KinderAlbom" element={< KinderAlbom/>}/>
<Route path="RetushFoto" element={<RetushFoto/>}/>
<Route path="RestavraciaFoto" element={<RestavraciaFoto/>}/>
<Route path="KinderKalendar" element={<KinderKalendar/>}/>
<Route path="VlasniKalendari" element={<VlasniKalendari/>}/>
<Route path="SchkolaKalendar" element={<SchkolaKalendar/>}/>
<Route path="MyKalendar" element={<MyKalendar/>}/>
<Route path="FotoAlbomu" element={<FotoAlbomu/>}/>
    </Routes>
   
 </BrowserRouter>

  );
}

export default App;
