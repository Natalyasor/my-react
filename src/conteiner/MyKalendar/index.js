import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Kaktus2 from "../KinderKalendar/kaktus2.jpg";
import My from "../KinderKalendar/my.jpg";
import Serce from "../KinderKalendar/serce.jpg";
import Kvitka3 from "../KinderKalendar/kvitka3.jpg";
import Novuy from "../KinderKalendar/novuy.jpg";

import Okularu from "../VlasniKalendari/okularu.jpg";
import Kvitka from "../VlasniKalendari/kvitka.jpg";
import Kvitka2 from "../VlasniKalendari/kvitka2.jpg";
import Kaktus from "../VlasniKalendari/kaktus.jpg";
import Plivka from "../VlasniKalendari/plivka.jpg";
import Foto09 from "../SchkolaKalendar/foto09.jpg";
import Foto010 from "../SchkolaKalendar/foto010.jpg";




export default function MyKalendar() {



    const navigate = useNavigate()
    return (
        <motion.div
        animate={{ x: 0, opacity: 1}} // Анімація руху вправо на 100 одиниць
        initial={{x: -1000, opacity: 0}}
        transition={{ duration: 1 }} // Тривалість анімації (1 секунда)
      
      >

        <div className="Contactbox">
        <img src={Fon} alt="Fon" className="image"/>
        <div className="FotoAlbomubox">
<div className="FotoAlbomtitle">
Мої календарі
</div>
<div className=" selection box-acordion2">
<ul className="acordion2">
<li><img src = {Kaktus2} alt="Kaktus2" height={300} width={200}/></li>
<li><img src = {My} alt="My" height={300} width={200}/></li>
<li><img src = {Serce} alt="Serce" height={300} width={200}/></li>
<li><img src = {Kvitka3} alt="Kvitka3" height={300} width={200}/></li>
<li><img src = {Novuy} alt="Novuy" height={300} width={200}/></li>
<li><img src = {Okularu} alt="Foto1" height={300} width={200}/></li>
<li><img src = {Kvitka} alt="Kvitka" height={300} width={200}/></li>
<li><img src = {Plivka} alt="Plivka" height={300} width={200}/></li>
<li><img src = {Kaktus} alt="Kaktus" height={300} width={200}/></li>
<li><img src = {Kvitka2} alt="Kvitka2" height={300} width={200}/></li>
<li><img src = {Foto09} alt="Foto09" height={300} width={200}/></li>
<li><img src = {Foto010} alt="Foto010" height={300} width={200}/></li>
</ul>
        </div>
        </div>
  
        <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<div className="copy3">
Дизайн календарів: Сороколіт Наталія (деякі фото, які використані у календарях взяті з інтернету)
</div>
        <img src={Fon} alt="Fon" className="image"/>
        </div>
         </motion.div>
    )
}
