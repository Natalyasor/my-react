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
import Foto14 from "../RetushFoto/foto14.jpg";
import Foto21 from "../FotoAlbomu/foto21.jpg";
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
    <Link className="Prosto" to="Price">Тарифи</Link>
  <div className="Sign">
  <Link className="Prosto" to="/Signup">Sign up</Link>
  <Link className="Prosto" to="/SignIn">Sign in</Link>
  </div>
    </div>
   
    </div>
</div>
           </div>
         
        <div className="button">
            <div>
        <img src={Foto} alt="Foto" height={350} width={270} className="foto"/>
        </div>
       
       <Link className="btn" to="/#">Портфоліо</Link>
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
   <Link className="Retuschfoto" to = "/RetushFoto">Переглянути</Link>
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
   <Link className="Retuschfoto" to = "/MyKalendar">Переглянути</Link>
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
   <Link className="Retuschfoto" to = "/RestavraciaFoto">Переглянути</Link>
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
   <Link className="Retuschfoto" to = "/FotoAlbomu">Переглянути</Link>
   </div>
</div>
</div>
<img src={Fon} alt="Fon" className="image"/>

<div className="Poslug">

<div className="Poslugucontent">


<div className="boxposlug">
    <img src={Kalendari} alt="Kalendari" height={150} width={210} className="Pimgkalen"/>
    <Link className="Psbutton " to = "/MyKalendar">Фотокалендарі</Link>
</div>



<div className="boxposlug">
    <img src={Foto14} alt="foto14" height={150} width={210} className="Pimgkalen"/>
    <Link className="Psbutton " to = "/RetushFoto">Ретуш фото</Link>
</div>

 


<div className="boxposlug">
    <img src={Foto21} alt="Foto21" height={150} width={180} className="Pimgkalen"/>
    <Link className="Psbutton " to = "/FotoAlbomu">Фотоальбоми</Link>
</div>

 


<div className="boxposlug">
    <img src={Rest} alt="Rest"  height={150} width={210} className="Pimgkalen"/>
    <Link className="Psbutton " to = "/RestavraciaFoto">Реставрація фото</Link>
</div>

</div>
</div>
<img src={Fon} alt="Fon" className="image"/>

<div className="Futter">
<div className="Contactu">
<div className="Conttitle">Контакти <hr/></div> 

<div className="boxcontact">


<div className="numerT">
+380676999827 <br />
+4915156552615 <br />
Natalyasor110983@gmail.com
</div>
</div>

<div className="boxcontact">
<div className="Adress">
<div className="name">
Natalya
Falyta 
<div className="name1">PhotoDesigner</div>
</div>

</div>

</div>

</div>
<div className="Thenk">THANK YOU</div>
</div>



<div className="copy">
<div className="copy1">
Дизайн календарів: Сороколіт Наталія 
</div>
<div className="copy2">
    (деякі фото які використані у календарях взяті з інтернету)
</div>
</div>
<img src={Fon} alt="Fon" className="image"/>
            </div>
            
    )
    
}