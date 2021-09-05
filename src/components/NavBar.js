import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        color: "gold",
        margin: "0 6px 6px",
        textDecoration: "none",
        background: "black",
        fontSize: "2.0rem",
    }

    const activeStyles = {
        color: "white",
        background: "linear-gradient(90deg, black, gold)"
    }

   
    return(
        <div className="navbar">
            <NavLink to="/" exact style={linkStyles} activeStyle={activeStyles}>
                Home
            </NavLink>
            <NavLink to="/quotes" exact  style={linkStyles} activeStyle={activeStyles}>
                Quotes
            </NavLink>
            <NavLink to="/did-you-know" exact  style={linkStyles} activeStyle={activeStyles}>
                Did You Know?
            </NavLink>
            <NavLink to="/contact-me" exact  style={linkStyles} activeStyle={activeStyles}>
                Contact Me
            </NavLink>
        </div>

    )
}

export default NavBar;