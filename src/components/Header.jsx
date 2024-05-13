import LogoKasa from '../assets/image/LOGO.png';
import { NavLink } from 'react-router-dom';
import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <img src={LogoKasa} alt="LogoKasa"/>
            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Footer /> 
        </div>
    );
};

export default Header;
