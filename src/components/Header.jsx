import LogoKasa from '../assets/image/LOGO.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
     <div className="header">
       <img src={LogoKasa} alt="LogoKasa"/>
       <nav className="header-nav">
        <ul>
            <li>
                <NavLink to="/" className = {({isActive}) => (isActive ? "underline" : "")}>
                    <a>Accueil</a>
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className = {({isActive}) => (isActive ? "underline" : "")}>
                    <a>A Propos</a>
                </NavLink>
            </li>
        </ul>
       </nav>
     </div>
    );
};

export default Header;