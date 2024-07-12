import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import { Link, useNavigate } from "react-router-dom";
import Back from "../About/back.svg";


export default function Price() {
    const navigate = useNavigate()



    return (
        <motion.div
        animate={{ x: 0, opacity: 1}} // Анімація руху вправо на 100 одиниць
        initial={{x: -1000, opacity: 0}}
        transition={{ duration: 1 }} // Тривалість анімації (1 секунда)
      >
         <div className="PricePage">
         <img src={Fon} alt="Fon" className="image"/>
      <div className="pricebox">
      <div className="Pricetitle">
Прайс
         </div>
         <hr/>
         <motion.div className="Pricedescription"
         initial={{y:-600, opacity: 0}}
         animate={{y: 0, opacity: 4}}
         transition={{duration: 3}}
         >
 <ul>
    <li>Реставрація фотографії</li>
    <li>Дитячі та сімейні календарі</li>
    <li> Ретуш фотографії</li>
    <li>Розробка фотоальбомів</li>
    <li>Розробка вебсайтів</li>
 </ul>
 <ul>
    <li>від 300грн</li>
    <li>від 400грн</li>
    <li>від 300грн</li>
    <li>від 100грн за розворот</li>
    <li>обговорюється при зустрічі</li>
 </ul>
         </motion.div>
      </div>
      <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>

      <img src={Fon} alt="Fon" className="image"/>
         </div>
       </motion.div>
    )
}
