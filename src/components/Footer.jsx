import React from 'react';
import LogoWhite from '../assets/images/LOGO_white.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={LogoWhite} alt='Logo' className='footer__logo' />
      <p className='footer__text'>© 2020 KASA. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;