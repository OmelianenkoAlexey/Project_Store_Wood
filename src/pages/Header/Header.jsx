import React, { useContext } from 'react';
import './Header.css';
// import Basket from '../../components/Basket/Basket';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-scroll';
import Burger from './Burger/Burger';
import { Link } from 'react-scroll';
import { Context } from '../../Contex';

export default function Header() {
  const location = useLocation();

  const { language, setLanguage } = useContext(Context);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className='header container'>

        <a className='header-logo__picture' href="/">
          <img className='header-logo__image' src="./img/logo-header.svg" alt="storeWood" />
        </a>

        <nav className='header-category'>
          <a className={`header-category__item ${location.pathname === '/' ? 'action' : ''}`} href="/">{language === 'ua' ? 'Головна' : 'Main'}</a>

          <Link to="catalog" className='header-category__item' smooth={true} duration={500} offset={50}>{language === 'ua' ? 'Каталог' : 'Catalog'}</Link>

          <Link to="aboutUs" className='header-category__item' smooth={true} duration={1000} offset={50}>{language === 'ua' ? 'Про нас' : 'About us'}</Link>

          <Link to="instagram" className='header-category__item' smooth={true} duration={1000} offset={50}>{language === 'ua' ? 'Портфоліо' : 'Portfolio'}</Link>

          <Link to="contacts" className='header-category__item' smooth={true} duration={1000} offset={50}>{language === 'ua' ? 'Контакти' : 'Contacts'}</Link>

        </nav>

        <div className='header-language'>
          <div onClick={() => handleLanguageChange('ua')} className={`header-language ${language === 'ua' ? 'header-language__active' : ''} `}>UA</div>
          <div className='header-language__line'></div>
          <div onClick={() => handleLanguageChange('en')} className={`header-language ${language === 'en' ? 'header-language__active' : ''} `}>EN</div>
        </div>

        {/* <Basket /> */}
        <Burger />

      </div >
    </>
  );
}
