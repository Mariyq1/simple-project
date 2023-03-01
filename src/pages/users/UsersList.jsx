import React, { useEffect, useState } from "react";
import s from './Users.module.css';
import  { Users } from "./Users";
import Success from "./Success";

const UsersList =()=>{
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch('https://reqres.in/api/users').then(res=>res.json())
        .then((json)=>{
            setUsers(json.data)
        }).catch(err=>{
            console.warn(err);
            alert('Error')
        }).finally(()=>setLoading(false))
    }, []);
    const onChangeSearchValue = (event)=>{
        setSearchValue(event.target.value);
    }
    const onClickInvite = (id) =>{
        if(invites.includes(id)){
            setInvites(prev => prev.filter((_id)=> _id !== id))
        }else {
            setInvites(prev=>[...prev, id])
        }
    }
    const onClickSetInvites = () =>{
        setSuccess(true);
    }
    return (
        <div className={s.users}>
            {
                success ?(
                    <Success count={invites.length}/>
                ) : (
                    <Users 
                items={users} 
                isLoading={isLoading} 
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                invites={invites}
                onClickInvite={onClickInvite}
                onClickSetInvites={onClickSetInvites}
                />
                )}
        </div>
    )}
export default UsersList;