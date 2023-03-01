import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Navbar = ()=>{
    return (
        <div className= "navbar">
            <div className = "navbar-links">
                <NavLink to = "counter">Counter</NavLink>
                <NavLink to = "quiz">Quiz</NavLink>
                <NavLink to = "users">Users</NavLink>
            </div>
        </div>
    )
}
export default Navbar;