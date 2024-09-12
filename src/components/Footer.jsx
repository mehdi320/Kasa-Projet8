
import LogoKasa from '../assets/images/logoFooter.png';
const Footer = () => {
    return (
        <footer className="footer-container">
        <div>
          <img className="footer-logo" src={LogoKasa} alt="Logo Kasa" />
        </div>
        <div className="footer-text-container">
          <p className="footer-text">© 2022 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;