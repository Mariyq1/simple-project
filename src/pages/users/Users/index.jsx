import React from "react";
import {User} from "./User";
import {Loader} from "./Loader";
import s from "../Users.module.css";

export const Users = ({ items, isLoading, searchValue, 
  onChangeSearchValue, invites, onClickInvite,onClickSetInvites }) => {
  return (
    <>
      <div className={s.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input 
          type="text" 
          placeholder="Find user..." 
          value={searchValue}
          onChange={onChangeSearchValue}
          />
      </div>
      {isLoading ? (
        <div>
          <Loader/>
        </div>
      ) : (
        <ul className={s.userslist}>
          {items.filter(obj =>{
            const fullName = (obj.first_name + obj.last_name).toLowerCase();
            return fullName.includes(searchValue.toLowerCase()) || 
            obj.email.toLowerCase().includes(searchValue.toLowerCase())
          }).map((obj) => 
          <User  {...obj} 
              key={obj.id} 
              isInvited={invites.includes(obj.id)}
              onClickInvite={onClickInvite}
              />
          )}
        </ul>
      )}
      {invites.length > 0 && (
        <button 
        className={s.sendBtn}
        onClick={onClickSetInvites}>
          Send an invitation</button>
      )}
    </>
  );
};