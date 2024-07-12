import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Foto02 from "./foto02.jpg";
import Foto0 from "./foto0.jpg";
import Foto03 from "./foto03.jpg";
import Foto05 from "./foto05.jpg";
import Foto06 from "./foto06.jpg";

import Foto1 from "../VlasniKalendari/foto1.jpg";
import Foto2 from "../VlasniKalendari/foto2.jpg";
import Foto3 from "../VlasniKalendari/foto3.jpg";
import Foto4 from "../VlasniKalendari/foto4.jpg";
import Foto5 from "../VlasniKalendari/foto5.jpg";
import Foto9 from "../SchkolaKalendar/foto9.jpg";
import Foto10 from "../SchkolaKalendar/foto10.jpg";




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
<li><img src = {Foto02} alt="Foto02" height={300} width={200}/></li>
<li><img src = {Foto0} alt="Foto0" height={300} width={200}/></li>
<li><img src = {Foto03} alt="Foto03" height={300} width={200}/></li>
<li><img src = {Foto05} alt="Foto05" height={300} width={200}/></li>
<li><img src = {Foto06} alt="Foto06" height={300} width={200}/></li>
<li><img src = {Foto1} alt="Foto1" height={300} width={200}/></li>
<li><img src = {Foto2} alt="Foto2" height={300} width={200}/></li>
<li><img src = {Foto5} alt="Foto5" height={300} width={200}/></li>
<li><img src = {Foto4} alt="Foto4" height={300} width={200}/></li>
<li><img src = {Foto3} alt="Foto3" height={300} width={200}/></li>
<li><img src = {Foto9} alt="Foto9" height={300} width={200}/></li>
<li><img src = {Foto10} alt="Foto10" height={300} width={200}/></li>
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
