import React, { useState, useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [showModal, setShowModal] = useState(false); //Boolean Value Not String Value

    const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return (

        <header >

            {/* ============ In Large Screen ============ */}

            <div className='hide-when-mobile' />

            {/* Navbar */}

            <nav className='hide-when-mobile'>
                <ul>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><NavLink to="/projects"> Projects </NavLink></li>
                    <li><NavLink to="/contact"> Contact </NavLink></li>
                </ul>
            </nav>

            {/* ============ In Small Screen ============ */}

            <button className='menu' onClick={() => { setShowModal(true) }}>
                <i className="fas fa-bars"></i>
            </button>

            {/* Modal , pop-up */}

            {showModal && (
                <div className='modal'>
                    <ul>
                        <li>
                            <button className="icon-close" onClick={() => { setShowModal(false) }}>
                                <i className="fas fa-xmark"></i>
                            </button>
                        </li>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/about"> About </NavLink></li>
                        <li><NavLink to="/projects"> Projects </NavLink></li>
                        <li><NavLink to="/contact"> Contact </NavLink></li>
                    </ul>
                </div>
            )}

            {/* ============ Toggle Theme Button ============ */}

            <button className='mode' onClick={() => {
                localStorage.setItem("currentTheme", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("currentTheme"));
            }}>
                {theme === "dark" ? (
                    <i className="far fa-moon"></i>
                ) : (
                    <i className="far fa-sun" style={{ color: 'orange' }}></i>
                )}
            </button>

        </header >

    )
}

export default Header;