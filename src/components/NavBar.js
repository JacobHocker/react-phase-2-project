import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        color: "white",
        padding: "40px",
        width: "100px",
        margin: "0 6px 6px",
        textDecoration: "none",
        background: "blue",
    }
    return(
        <div className="navbar">
            <NavLink to="/" style={linkStyles}>
                Home
            </NavLink>
            <NavLink to="/quotes"  style={linkStyles}>
                Quotes
            </NavLink>
            <NavLink to="/did-you-know-?"  style={linkStyles}>
                Did You Know?
            </NavLink>
            <NavLink to="/submit-a-quote"  style={linkStyles}>
                Submit A Quote
            </NavLink>
            <NavLink to="/submit-a-fact"  style={linkStyles}>
                Submit A Fact
            </NavLink>
            <NavLink to="/edit-a-quote"  style={linkStyles}>
                Edit A Quote
            </NavLink>
            <NavLink to="/contact-me"  style={linkStyles}>
                Contact Me
            </NavLink>
        </div>

    )
}

export default NavBar;