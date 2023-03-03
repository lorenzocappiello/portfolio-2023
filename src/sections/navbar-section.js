import React from "react";
import '/Users/lorenzocappiello/Desktop/portfolio-2023/src/App.css'; 

function NavbarSection() {

    return (
    <section className="navbar">
        <ul className="nav-menu">
            <li className="nav-item">
                <a href="#" className="nav-link">home</a>
                <a href="#about" className="nav-link">about</a>
                <a href="#works" className="nav-link">works</a>
                <a href="#contacts" className="nav-link">contacts</a>
            </li>
        </ul>
    </section>
    ); 

}

export default NavbarSection; 