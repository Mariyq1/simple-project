import React from "react";
import s from './Users.module.css';
import success from "../../Images/success.png"

const Success = ({count})=>{
    return(
        <div className={s.success}>
            <img src={success} alt="success"/>
            
            <h3>Success</h3>
            <p>An invitation has been sent to  {count} users</p>
            <button 
                className={s.sendBtn}
                onClick={()=>window.location.reload()}>
                    Back</button>

        </div>
    )
}
export default Success;