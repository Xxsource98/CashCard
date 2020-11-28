import React from 'react'

// Components
import * as Images from '../../images'

// Style
import './navbar.scss'

addEventListener("scroll", e => {
    if (window.scrollY >= 65) {
        document.querySelector(".navbar").classList.add("scrolled");
    } else {
        document.querySelector(".navbar").classList.remove("scrolled");
    }
})

const scrollTo = classElement => {
    document.querySelector(`.${classElement}`).scrollIntoView({
        behavior: "smooth"
    });
    
    const selector = document.querySelector(".navbar-elements-container").classList;
    if (selector.contains("active")) {
        document.querySelector(".navbar-elements-container").classList.toggle("active");
    }
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img src={Images.Logo} alt="Logo" />
                <p onClick={() => window.scrollTo({
                    behavior: "smooth",
                    top: 0
                })}>CashCard</p>
            </div>
            <div className="navbar-elements-container">
                <ul>
                    <li onClick={() => scrollTo("payments")}>Payments</li>
                    <li onClick={() => scrollTo("offer")}>Offer</li>
                    <li onClick={() => scrollTo("about")}>About Us</li>
                </ul>
            </div>
            <img src={Images.Navbar} alt="navbar" className="navbar-toggler" onClick={() => document.querySelector(".navbar-elements-container").classList.toggle("active")}/>
        </nav>
    )
}

export default Navbar;