import React, { useContext, useEffect } from 'react';
import Burger from './Burger/Burger';
import { Link } from 'react-scroll';
import { Context } from '../../Contex';
import './Header.css';

export default function Header() {

  const { language, setLanguage } = useContext(Context);

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
    }
  }, []);

  const languages = {
    de: {
      home: 'Startseite',
      catalog: 'Katalog',
      aboutUs: 'Über uns',
      portfolio: 'Portfolio',
      contacts: 'Kontakte',
    },
    en: {
      home: 'Main',
      catalog: 'Catalog',
      aboutUs: 'About us',
      portfolio: 'Portfolio',
      contacts: 'Contacts',
    },
    pl: {
      home: 'Strona główna',
      catalog: 'Katalog',
      aboutUs: 'O nas',
      portfolio: 'Portfolio',
      contacts: 'Kontakt',
    },
  };

  const selectedLanguageData = languages[language];

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  return (
    <>
      <div id='main' className='header container'>
        <a className='header-logo__picture' href="/">
          <img className='header-logo__image' src="./img/logo-header.svg" alt="storeWood" />
        </a>

        <nav className='header-category'>
          <a className='header-category__item' href="/">{selectedLanguageData.home}</a>
          <Link to="catalog" className='header-category__item' smooth={true} duration={500} offset={50}>{selectedLanguageData.catalog}</Link>
          <Link to="aboutUs" className='header-category__item' smooth={true} duration={1000}>{selectedLanguageData.aboutUs}</Link>
          <Link to="instagram" className='header-category__item' smooth={true} duration={1000}>{selectedLanguageData.portfolio}</Link>
          <Link to="contacts" className='header-category__item' smooth={true} duration={1000}>{selectedLanguageData.contacts}</Link>
        </nav>

        <div className='header-language'>
          {Object.keys(languages).map((lang) => (
            <div
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`header-language ${language === lang ? 'header-language__active' : ''}`}
            >
              {lang.toUpperCase()}
            </div>
          ))}
        </div>

        <Burger />
      </div>
    </>
  );
}
