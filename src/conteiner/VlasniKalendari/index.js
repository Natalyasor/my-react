import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import Foto1 from "./foto1.jpg";
import Foto2 from "./foto2.jpg";
import Foto3 from "./foto3.jpg";
import Foto4 from "./foto4.jpg";
import Foto5 from "./foto5.jpg";



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
<li><img src = {Foto1} alt="Foto1" height={300} width={200}/></li>
<li><img src = {Foto2} alt="Foto2" height={300} width={200}/></li>
<li><img src = {Foto5} alt="Foto5" height={300} width={200}/></li>
<li><img src = {Foto4} alt="Foto4" height={300} width={200}/></li>
<li><img src = {Foto3} alt="Foto3" height={300} width={200}/></li>
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
