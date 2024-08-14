import "./index.css";
import { motion } from "framer-motion";
import Fon from "../home/Fon.svg";
import Back from "../About/back.svg";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";




export default function SignIn() {
   const { register, formState: {errors, isValid}, handleSubmit, reset } = useForm(
    {
        mode: "onChange"
    }
   );

   const onSubmit = (data) => {
        alert(JSON.stringify(data));
       reset()
    }

    const navigate = useNavigate()
    return (
        <motion.div
        animate={{ x: 0, opacity: 1}} // Анімація руху вправо на 100 одиниць
        initial={{x: -1000, opacity: 0}}
        transition={{ duration: 1 }} // Тривалість анімації (1 секунда)
      
      >

        <div className="Contactbox">
        <img src={Fon} alt="Fon" className="image"/>
        <div className="Formbox">
<form className="Box" onSubmit={handleSubmit(onSubmit)}>



<div className="form_label">
    <label>Email</label>
<input {...register ("Email", {required: true,
  pattern:   /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
})} name="Email" placeholder="Введіть свій email"/>
{errors?.Email && <p className="form-text Errors">{"Введіть коректне значення email-адресси"}</p>}
</div>

<div className="form_label">
    <label>Password</label>
<input {...register ("Password", {required: true,
   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
})} name="Password" type="Password "placeholder="Введіть свій password"/>
{errors?.Password && <p className="form-text Errors">{"Мінімум 8 символів, включаючи хоча б одну цифру, малу та велику літеру"}</p>}
</div>


<button disabled = {!isValid} type="submit">Sign in</button>


</form>

        </div>
  
        <Link onClick={() => navigate(-1)} className="Back">
    <img src = {Back} alt = "Back" className="back"/>
</Link>

        <img src={Fon} alt="Fon" className="image"/>
        </div>
         </motion.div>
    )
}
