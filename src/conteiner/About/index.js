import "./index.css";
import Fon from "../home/Fon.svg";
import Back from "./back.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function About() {
    const navigate = useNavigate()
    return (

        <motion.div
        animate={{ x: 0, opacity: 1}} // Анімація руху вправо на 100 одиниць
        initial={{x: -1000, opacity: 0}}
        transition={{ duration: 1 }} // Тривалість анімації (1 секунда)
      
      >
               <div className="box">
<img src={Fon} alt="Fon" className="image"/>
<Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>
<div className="boxcontent">
<div className="myname">
Natalya Falyta
</div>
<div className="namedescription">
WebDesigner, FullStack developer
</div>

<div className="contact-box">
<div className="Contacttitle">Контакти</div>
 <hr/>
 <div className="mycontact">
+380676999827 <br/>
+4915156552615 
</div>
<div className="Email">
Natalyasor110983@gmail.com
</div>
</div>
</div>
<img src={Fon} alt="Fon" className="image"/>
        </div>

      </motion.div>

        
    )
}
