import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        color: "gold",
        margin: "0 6px 6px",
        textDecoration: "none",
        background: "black",
        fontSize: "1.5rem",
    }

   
    return(
        <div className="navbar">
            <NavLink to="/" exact style={linkStyles}>
                Home
            </NavLink>
            <NavLink to="/quotes" exact  style={linkStyles}>
                Quotes
            </NavLink>
            <NavLink to="/did-you-know" exact  style={linkStyles}>
                Did You Know?
            </NavLink>
            <NavLink to="/contact-me" exact  style={linkStyles}>
                Contact Me
            </NavLink>
        </div>

    )
}

export default NavBar;