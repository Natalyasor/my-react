import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Back from "../About/back.svg";
import Fon from "../home/Fon.svg";



export default function Services() {
   const navigate = useNavigate()
    return (
        <div className="boxcervise">
             <img src={Fon} alt="Fon" className="image"/>

    <div className="box-menu">
<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Розробка фотоальбомів</Link>
<div className="box-list">
 
<li><Link to = "#" className="menu-list">Весільні фотоальбом</Link></li>
<li><Link to = "#" className="menu-list">Дитячі фотоальбоми</Link></li>
<li><Link to = "#" className="menu-list">Перше причастя</Link></li>
<li><Link to = "#" className="menu-list">Шкільні фотоальбоми</Link></li>

</div>
</li>
</div>

<div className="boxx">
    <li><Link to = "#" className="myAlbombutton">Ретуш та фотомонтаж</Link>
<div className="box-list">
<li><Link to = "/Price" className="menu-list">Усі фото</Link></li>
</div>
</li>
</div>

<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Реставрація фото</Link>
<div className="box-list">
<li><Link to = "#" className="menu-list">Усі фото</Link></li>
</div>
</li>
</div>

<div className="boxx">
   <li> <Link to = "#" className="myAlbombutton">Розробка календарів</Link>
<div className="box-list">
<li><Link to = "#" className="menu-list">Дитячі фотокалендарі</Link></li>
<li><Link to = "#" className="menu-list">Шкільні фотокалендарі</Link></li>
<li><Link to = "#" className="menu-list">Особисті фотокалендарі</Link></li>
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
<ul className="acordion">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
</div>

<Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<img src={Fon} alt="Fon" className="image"/>
</div>
       
    )
}
