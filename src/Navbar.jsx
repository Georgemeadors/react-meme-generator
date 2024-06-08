import React from "react";

import Logo from "./images/Logo.png";





export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt= "image" className="navbar-image"/>
            <div className="navbar-text">
                React Course-Project3

            </div>

        </nav>
    );
}   