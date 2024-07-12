import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";

import Kvitka from "./kvitka.jpg";
import Kvitka2 from "./kvitka2.jpg";
import Kaktus from "./kaktus.jpg";
import Plivka from "./plivka.jpg";
import Okularu from "./okularu.jpg";


export default function VlasniKalendari() {

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
 Особисті фотокалендарі
</div>
<div className="box-acordion">
<ul className="acordion">
<li><img src = {Okularu} alt="Okularu" height={300} width={200}/></li>
<li><img src = {Kvitka} alt="Kvitka" height={300} width={200}/></li>
<li><img src = {Plivka} alt="Plivka" height={300} width={200}/></li>
<li><img src = {Kaktus} alt="Kaktus" height={300} width={200}/></li>
<li><img src = {Kvitka2} alt="Kvitka2" height={300} width={200}/></li>
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
