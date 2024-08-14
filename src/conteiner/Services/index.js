import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Back from "../About/back.svg";
import Fon from "../home/Fon.svg";

import { motion } from "framer-motion";

import Foto08 from "./img/foto08.jpg";



export default function Services() {
   const navigate = useNavigate()
    return (
        <motion.div
        animate={{ x: 0, opacity: 1}} // Анімація руху вправо на 100 одиниць
        initial={{x: -1000, opacity: 0}}
        transition={{ duration: 1 }} // Тривалість анімації (1 секунда)
      
      >
        <div className="boxcervise">
             <img src={Fon} alt="Fon" className="image"/>

    <div className="box-menu">
<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Розробка фотоальбомів</Link>
<div className="box-list">
 
<li><Link to = "/Contact" className="menu-list">Весільні фотоальбом</Link></li>
<li><Link to = "/KinderAlbom" className="menu-list">Дитячі фотоальбоми</Link></li>
<li><Link to = "#" className="menu-list">Перше причастя</Link></li>
<li><Link to = "#" className="menu-list">Шкільні фотоальбоми</Link></li>

</div>
</li>
</div>

<div className="boxx">
    <li><Link to = "#" className="myAlbombutton">Ретуш та фотомонтаж</Link>
<div className="box-list">
<li><Link to = "/RetushFoto" className="menu-list">Усі фото</Link></li>
</div>
</li>
</div>

<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Реставрація фото</Link>
<div className="box-list">
<li><Link to = "/RestavraciaFoto" className="menu-list">Усі фото</Link></li>
</div>
</li>
</div>

<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Розробка календарів</Link>
<div className="box-list">
<li><Link to = "/KinderKalendar" className="menu-list">Дитячі фотокалендарі</Link></li>
<li><Link to = "/SchkolaKalendar" className="menu-list">Шкільні фотокалендарі</Link></li>
<li><Link to = "/VlasniKalendari" className="menu-list">Особисті фотокалендарі</Link></li>
</div>
</li>
</div>

<div className="boxx">
   <li><Link to = "#" className="myAlbombutton">Розробка веб-сайтів</Link>
<div className="box-list">
<li><Link to = "#" className="menu-list">Створення дизайну <br/>у Figma</Link></li>
<li><Link to = "#" className="menu-list">Розробка Frontent у VS</Link></li>
</div>
</li> 
</div>

</div>



<div className="wrapper">
<ul>
 
 
  
  <motion.img src = {Foto08} alt="Foto01" height={250} width={750}
    animate={{ x: 0, opacity: 9}} // Анімація руху вправо на 100 одиниць
        initial={{x: -100, opacity: 0}}
        transition={{duration: 3}}
       
  />

</ul>
</div>

<Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<img src={Fon} alt="Fon" className="image"/>
</div>
       </motion.div>
    )
}
 