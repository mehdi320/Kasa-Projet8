import LogoKasa from '../assets/image/LOGO.png';


const Header = () => {
    return (
     <div className="header">
       <img src={LogoKasa} alt="LogoKasa"/>
       <nav className="header-nav">
        <ul>
            <li>
                <a href="#">Accueil</a>
                </li>
                <li>
                <a href="#">A Propos</a>
            </li>
        </ul>
       </nav>
     </div>
    );
};

export default Header;