
import Logo from '../assets/images/LOGO.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logo} alt='Logo' className='footer__logo' />
      <p className='footer__text'>© 2020 KASA. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;