import "./index.css";
import Fon from "../home/Fon.svg";
import Back from "./back.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function About() {
    const navigate = useNavigate()
    return (
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

</div>
<img src={Fon} alt="Fon" className="image"/>
        </div>
        
    )
}
