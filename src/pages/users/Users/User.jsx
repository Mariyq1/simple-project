import React from 'react';
import s from '../Users.module.css';

export const User = ({id, email, first_name, last_name, avatar, onClickInvite, isInvited}) => (
  <li>
    <div>
      <img className={s.avatar} src={avatar} alt="User" />
      <div>
        <h3>{first_name} {last_name}</h3>
        <p>
          {email}
        </p>
      </div>
    </div>
    <button 
      onClick={()=>onClickInvite(id)}
      className={s.addBtn}
      >{isInvited ? '-' : '+'}
      </button>
  </li>
);