import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/quotes">
                Quotes
            </NavLink>
            <NavLink to="/did-you-know-?">
                Did You Know?
            </NavLink>
            <NavLink to="/submit-a-quote">
                Submit A Quote
            </NavLink>
            <NavLink to="/submit-a-fact">
                Submit A Fact
            </NavLink>
            <NavLink to="/edit-a-quote">
                Edit A Quote
            </NavLink>
            <NavLink to="/contact-me">
                Contact Me
            </NavLink>
        </div>

    )
}

export default NavBar;