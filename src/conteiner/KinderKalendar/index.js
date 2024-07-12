import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Kaktus2 from "./kaktus2.jpg";
import My from "./my.jpg";
import Serce from "./serce.jpg";
import Kvitka3 from "./kvitka3.jpg";
import Novuy from "./novuy.jpg";




export default function KinderKalendar() {



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
 Фотокалендарі для дітей
</div>
<div className="box-acordion">
<ul className="acordion">
<li><img src = {Kaktus2} alt="Kaktus2" height={300} width={200}/></li>
<li><img src = {My} alt="My" height={300} width={200}/></li>
<li><img src = {Serce} alt="Serce" height={300} width={200}/></li>
<li><img src = {Kvitka3} alt="Kvitka3" height={300} width={200}/></li>
<li><img src = {Novuy} alt="Novuy" height={300} width={200}/></li>
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
