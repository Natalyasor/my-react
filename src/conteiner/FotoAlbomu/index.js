import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";






export default function FotoAlbomu() {



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
Фотоальбоми
</div>
<div className="box-alb">

        </div>
        </div>
  
        <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<div className="copy3">
Дизайн фотоальбомів: Сороколіт Наталія (фото які використані на сторінках фотоальбому взяті з інтернету)
</div>
        <img src={Fon} alt="Fon" className="image"/>
        </div>
         </motion.div>
    )
}
