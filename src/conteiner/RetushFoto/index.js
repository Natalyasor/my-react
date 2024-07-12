import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Foto01 from "./foto01.jpg";
import Foto01a from "./foto01a.jpg";

import Foto14 from "./foto14.jpg";
import Foto14a from "./foto14a.jpg";
import Foto13 from "./foto13.jpg";
import Foto13a from "./foto13a.jpg";
import Foto12 from "./foto12.jpg";
import Foto12a from "./foto12a.jpg";

export default function  RetushFoto() {
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
Ретуш та фотомонтаж фото
</div>
<div className="box-retusch">
    <ul>
        <li><img src = {Foto01} alt="Foto01" height={100} width={150} className="imgborder"/></li>
        <li><img src = {Foto01a} alt="Foto01a" height={100} width={150} className="imgborder"/></li>
    </ul>
    <ul>
        <li><img src = {Foto14} alt="Foto14" height={100} width={150} className="imgborder"/></li>
        <li><img src = {Foto14a} alt="Foto14a" height={100} width={150} className="imgborder"/></li>
    </ul>
    <ul>
        <li><img src = {Foto13} alt="Foto13" height={200} width={130} className="imgborder"/></li>
    </ul>
    <ul>
        <li><img src = {Foto13a} alt="Foto13a" height={200} width={130} className="imgborder"/></li>
    </ul>

    <ul>
        <li><img src = {Foto12} alt="Foto12" height={200} width={130} className="imgborder"/></li>
    </ul>
    <ul>
        <li><img src = {Foto12a} alt="Foto12a" height={200} width={130} className="imgborder"/></li>
    </ul>
</div>
        </div>
        <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<div className="copy3">
Усі фото взяті з інтернету ( обробка: Сороколіт Наталія)
</div>
        <img src={Fon} alt="Fon" className="image"/>
        </div>
         </motion.div>
    )
}
