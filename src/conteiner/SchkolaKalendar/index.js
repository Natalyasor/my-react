import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Foto09 from "./foto09.jpg";
import Foto010 from "./foto010.jpg";




export default function SchkolaKalendar() {



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
 Шкільні фотокалендарі
</div>
<div className="box-acordion1">
<ul className="acordion1">
<li><img src = {Foto09} alt="Foto09" height={300} width={200}/></li>
<li><img src = {Foto010} alt="Foto010" height={300} width={200}/></li>
</ul>
        </div>
        </div>
  
        <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<div className="copy3">
Дизайн календарів: Сороколіт Наталія 
</div>
        <img src={Fon} alt="Fon" className="image"/>
        </div>
         </motion.div>
    )
}
