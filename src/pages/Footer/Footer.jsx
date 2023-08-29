import React, { useContext } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faViber, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Context } from '../../Contex';
import { Link } from 'react-scroll';

export default function Footer() {
  const { language } = useContext(Context);
  return (
    <footer id="contacts" className='footer'>
      <div className='footer-primary container'>

        <div className='footer-catalog'>
          <div className='footer-info__title'>{language === 'ua' ? 'КАТАЛОГ' : 'CATALOG'}</div>
          <a className='footer-catalog__item' href="/double-beds">{language === 'ua' ? 'Двоспальні ліжка' : 'Double beds'}</a>
          <a className='footer-catalog__item' href="/single-beds">{language === 'ua' ? 'Односпальні ліжка' : 'Double beds'}</a>
          <a className='footer-catalog__item' href="/bunk-beds">{language === 'ua' ? 'Двоповерхові ліжка' : 'Bunk beds'}</a>
          <a className='footer-catalog__item' href="/house-beds">{language === 'ua' ? 'Ліжка будиночком' : 'The bed is a house'}</a>
        </div>

        <div className='footer-info'>
          <div className='footer-info__title'>{language === 'ua' ? 'ІНФОРМАЦІЯ' : 'INFORMATION'}</div>
          <Link to="main" className='footer-info__item' smooth={true} duration={1000}>{language === 'ua' ? 'Головна' : 'Main'}</Link>
          <Link to="aboutUs" className='footer-info__item' smooth={true} duration={1000}>{language === 'ua' ? 'Про нас' : 'About us'}</Link>
          <Link to="instagram" className='footer-info__item' smooth={true} duration={500}>{language === 'ua' ? 'Портфоліо' : 'Portfolio'}</Link>
        </div>

        <div id='contacts' className='footer-right'>
          {/* <a className='footer-right__title' href="/contacts">КОНТАКТИ</a> */}
          <div className='footer-right__title'>{language === 'ua' ? 'КОНТАКТИ' : 'CONTACTS'}</div>
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
        <div className='footer-secondary__info'>© 2023 Store Wood</div>
      </div>
    </footer>
  );
}
