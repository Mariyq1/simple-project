import React from 'react';
import s from '../Users.module.css';
import loader from "../../../Images/loader.gif";

export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="Loader"/>
        </div>
    )
}