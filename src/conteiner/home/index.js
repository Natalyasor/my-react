import "./index.css";
import Fon from "./Fon.svg";
import Foto from "./Foto.svg"
import Work from "./work.svg";
import Logo from "./logo.svg"
import Kalendar from "./Kalendar.svg";
import Restavr from "./Restavr.svg";
import Alb1 from "./Alb1.svg";
import Alb2 from "./Alb2.svg";
import Kalendari from "./kalendari.svg";
import RetFoto from "./RetFoto.svg";
import Alb from "./Alb.svg";
import Retusch from "./retusch.svg";
import Rest from "./rest.svg";

import { Link } from "react-router-dom";





export default function Home() {
  
    return (
        <div className="page">
           <img src={Fon} alt="Fon" className="image"/>
           <div className="menu">
<div className="content">

    <div className="Navbar">
    <img src={Logo} alt="Logo"/>
  <div className="nav">
    <Link className="Prosto" to="/About">Про мене</Link>
    <Link className="Prosto" to="/Services">Послуги</Link>
    <Link className="Prosto" to="/Contact">Контакти</Link>
    <Link className="Prosto" to="Price">Тарифи</Link>
    </div>
   
    </div>
</div>
           </div>
           <img src={Foto} alt="Foto" className="foto"/>
        <div className="button">
        <button className="btn">Портфоліо</button>
        </div>
        <img src={Fon} alt="Fon" className="image"/>

<div className="Fotocontent">
<div className="About">
<div className="about">
            <img src = {Work} alt="Work"/>
        </div>
        <div className="description">
        Реставрація та ретуш фотографії, <br /> 
виготовлення календарів та фотоальбомів.
<div className="description1">Це те, що я вам пропоную.</div>
</div>
<div className="Retusch">
    <img src = {Retusch} alt="Retusch"/>
<div className="Retuschcontent">
<div className="title">
    Ретуш фотографії:
    </div>
    <div className="description2">
ми завжди на фото хочемо виглядати на всі 100%. Тому ретуш це те що потрібно 
    </div >
   <div className="buttonfoto">
   <Link className="Retuschfoto" to = "/Retuschfoto">Переглянути</Link>
   </div>
</div>
</div>
</div>
<div className="Kalendarcontent">


<div className="Kalcont">
<div>
    <img src = {Kalendar} alt="Kalendar" height={250} width={190} className="kalendimg"/>
    </div>

  <div>
  <div className="kalend">
    Мої календарі  зробленні з любовю.
    </div>
   <div className="btnkalend">
   <Link className="Retuschfoto" to = "/Retuschfoto">Переглянути</Link>
   </div>
  </div>
</div>
<div className="Restavracia">
<div className="Restavr1">
<div className="Restfoto">
    <img src={Restavr} alt="Restavr"height={180} width={300}className="Rfoto"/>
</div>
<div className="Rdescription">
<div className="Rtitle">
Реставрація фотографії:
</div>
<div className="descrrest">
 я впевнена кожен з вас має у дома
старе фото яке б хотілося хоч трошки
відновити.
</div>
<div className="Rbutton">
   <Link className="Retuschfoto" to = "/Retuschfoto">Переглянути</Link>
   </div>
</div>
</div>
</div>

</div>

</div>
<img src={Fon} alt="Fon" className="image"/>

<div className="Fotoalbom">
<div className="Albomcontent">
    <div className="albomfoto">
<img src = {Alb1} alt="Albom1"height={300} width={500} className="Albimg1"/>
</div>
<div className="Albomdescription">
Ви маєте можливість обирати формат
та матеріал <br /> на якому буде надруковано 
ваш фотоальбом
</div>

</div>
<div className="Albomcontent1">
<div className="Atitle">
Мої фотоальбоми це:
</div>
<div className="Adescription">
від знаменних подій 
до маленьких моментів повсякденного 
життя.
</div>
<div>
    <img src = {Alb2} alt="Albom2" height={300} width={500} className="Albimg2"/>
</div>
<div className="Abuttonfoto">
   <Link className="Retuschfoto" to = "/Retuschfoto">Переглянути</Link>
   </div>
</div>
</div>
<img src={Fon} alt="Fon" className="image"/>

<div className="Poslug">
<div className="Posltitle">Послуги</div>
<div className="Poslugucontent">
<div className="Pcontent">
<div>
    <img src={Kalendari} alt="Kalendari" className="Pimgkalen"/>
</div>
<div className="Poslbutton">
   <Link className="Psbutton" to = "/Retuschfoto">Фотокалендарі</Link>
   </div>
 
</div>
<div className="Pcontent">
<div>
    <img src={RetFoto} alt="RetFoto" className="Pimgkalen"/>
</div>
<div className="Poslbutton">
   <Link className="Psbutton" to = "/Retuschfoto">Ретуш фото</Link>
   </div>
 
</div>
<div className="Pcontent">
<div>
    <img src={Alb} alt="Alb" className="Pimgkalen"/>
</div>
<div className="Poslbutton">
   <Link className="Psbutton" to = "/Retuschfoto">Фотоальбоми</Link>
   </div>
 
</div>
<div className="Pcontent">
<div>
    <img src={Rest} alt="Rest" className="Pimgkalen"/>
</div>
<div className="Poslbutton">
   <Link className="Psbutton" to = "/Retuschfoto">Реставрація фото</Link>
   </div>
 
</div>
</div>
</div>
<img src={Fon} alt="Fon" className="image"/>

<div className="Futter">
<div className="Contactu">

<div className="Conttitle">Контакти</div> 

<div className="numerT">
+380676999827 <br />
+4915156552615 <br />
Natalyasor110983@gmail.com
</div>

<div className="Adress">
<div className="name">
Natalya
Falyta 
<div className="name1">PhotoDesigner</div>
</div>

</div>
</div>

<div className="Thenk">THANK YOU</div>
</div>
<img src={Fon} alt="Fon" className="image"/>
            </div>
            
    )
    
}