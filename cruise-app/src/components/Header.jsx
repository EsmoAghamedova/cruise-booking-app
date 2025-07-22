import React from "react";
import '../styles/Header.css';

function Header() {
    return (
        <>
        <section className="header">
        <img src="../assets/logo.png" alt="" />
        <nav>
            <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>Cruises</li></a>
                <a href=""><li>Booking</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </nav>
        <a href=""><img src="../assets/user.png" alt="" /></a>
        </section>
        </>
    )
}

export default Header;