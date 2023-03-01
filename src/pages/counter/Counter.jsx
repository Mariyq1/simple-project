import React, { useState } from "react";
import s from './Counter.module.css';

const Counter = () =>{
    const [count, setCount]  = useState(0);
        const onClickMinus = ()=>{
            setCount(count -1)
        }
        const onClickPlus = ()=>{
            setCount(count+2)
        }
    return(
        <div className={s.Counter}>
            <div>
                <h2>Counter</h2>
                <h1>{count}</h1>
                <button onClick={onClickMinus} className={s.minus}>
                    - Minus
                </button>
                <button onClick={onClickPlus} className={s.plus}>
                    - Plus
                </button>
            </div>
        </div>
    )
}
export default Counter;