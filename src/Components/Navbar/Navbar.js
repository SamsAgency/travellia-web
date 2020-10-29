import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
    return (
        <div className="Navbar">
            <NavLink className="logo" to ="/">
                <h3>LOGO</h3>
            </NavLink>
            <ul className="lists">
                <NavLink to="/" className="thelist" >Home</NavLink>
                <NavLink to="/adventure" className="thelist" >Adventure</NavLink>
                <NavLink to="/travel" className="thelist" >Travel</NavLink>
                <NavLink to="/hotels" className="thelist" >Hotels and Accomodation</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
