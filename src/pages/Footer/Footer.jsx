import React, { useContext } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faViber, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Context } from '../../Contex';
import { Link } from 'react-scroll';

export default function Footer() {
  const { language } = useContext(Context);


  
  const translations = {
    en: {
      title: 'CATALOG',
      single: 'Single beds',
      double: 'Double beds',
      bunk: 'Bunk beds',
      house: 'The bed is a house',
      info: 'INFORMATION',
      main: 'Main',
      about: 'About us',
      portfolio: 'Portfolio',
      contacts: 'CONTACTS',
    },
    de: {
      title: 'KATALOG',
      single: 'Einzelbetten',
      double: 'Doppelbett',
      bunk: 'Etagenbett',
      house: 'Das Bett ist ein Haus',
      info: 'INFORMATION',
      main: 'Hauptsächlich',
      about: 'Über uns',
      portfolio: 'Portfolio',
      contacts: 'KONTAKTE',
    },
    pl: {
      title: 'KATALOG',
      single: 'Pojedyńcze łóżka',
      double: 'Podwójne łóżka',
      bunk: 'Łóżka piętrowe',
      house: 'Łóżko jest domem',
      info: 'INFORMACJA',
      main: 'Główny',
      about: 'O nas',
      portfolio: 'Teczka',
      contacts: 'ŁĄCZNOŚĆ',
    },
  }

  const translationData = translations[language];



  return (
    <footer id="contacts" className='footer'>
      <div className='footer-primary container'>

        <div className='footer-catalog'>
          <div className='footer-info__title'>{translationData.title}</div>
          <a className='footer-catalog__item' href="/single-beds">{translationData.single}</a>
          <a className='footer-catalog__item' href="/double-beds">{translationData.double}</a>
          <a className='footer-catalog__item' href="/bunk-beds">{translationData.bunk}</a>
          <a className='footer-catalog__item' href="/house-beds">{translationData.house}</a>
        </div>

        <div className='footer-info'>
          <div className='footer-info__title'>{translationData.info}</div>
          <Link to="main" className='footer-info__item' smooth={true} duration={1000}>{translationData.main}</Link>
          <Link to="aboutUs" className='footer-info__item' smooth={true} duration={1000}>{translationData.about}</Link>
          <Link to="instagram" className='footer-info__item' smooth={true} duration={500}>{translationData.portfolio}</Link>
        </div>

        <div id='contacts' className='footer-right'>
          <div className='footer-right__title'>{translationData.contacts}</div>
          <div className='footer-right__item'>
            <a className='footer-right__item-address' href="https://goo.gl/maps/RLhTv4Rwb4UdhpxBA" target="_blank" rel="noreferrer">м. Запоріжжя, бульвар Шевченка, 16</a>
            <a className='footer-right__item-telephone' href="tel:+380676120366">
              <FontAwesomeIcon icon={faPhone} className='footer-right__item-image' />
              067 612 03 66</a>

          </div>

          <div className='footer-right__social'>
            <a className='footer-right__social-link' href='https://www.instagram.com/legenda_parfum/' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='footer-right__item-icon' />
            </a>

            <a className='footer-right__social-link' href='https://t.me/legenda_parfum' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} className='footer-right__item-icon' />
            </a>
          </div>

        </div>

      </div>

      <div className='footer-text'>
        <h2 className='footer-text__title'>STORE WOOD</h2>
      </div>

      <div className='footer-secondary'>
        <a href='https://circle.in.ua' target="_blank" rel="noreferrer" className='footer-secondary__info'>by circle studio 2023</a>
      </div>
    </footer>
  );
}
