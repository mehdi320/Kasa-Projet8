
import LogoKasa from '../assets/images/logoFooter.png';
const Footer = () => {
    return (
        <footer>
            <div className='footer'></div> {/* Added closing tag */}
            <div className='footer-logo'>
                <img src={LogoKasa} alt='Logo Kasa'/>
            </div> {/* Added closing tag */}
            <p>© 2020 Kasa. All rights reserved</p>
            <div className='footer-nav'>
            </div>
        </footer>
    );
};

export default Footer;