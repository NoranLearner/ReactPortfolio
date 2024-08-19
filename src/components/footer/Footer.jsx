import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <footer>

            <ul>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/about"> About </NavLink></li>
                <li><NavLink to="/projects"> Projects </NavLink></li>
                <li><NavLink to="/contact"> Contact </NavLink></li>
            </ul>

            <p> &copy; {new Date().getFullYear()} Noran Mostafa. All rights reserved.</p>

        </footer>

    )
}

export default Footer;
