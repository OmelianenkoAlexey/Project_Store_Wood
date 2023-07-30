import React from 'react';
// import CallBack from '../../components/CallBack/CallBack';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faViber, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faCode, faHighlighter, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
// import { faKorvue, faYoutube, faFacebook, faFacebookF, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Footer() {
  const location = useLocation();
  return (
    <footer id="contacts" className='footer'>
      <div className='footer-primary container'>

        <div className='footer-catalog'>
          <div className='footer-info__title'>КАТАЛОГ</div>
          <a className='footer-catalog__item' href="/full-vials">Двоспальні ліжка</a>
          <a className='footer-catalog__item' href="/rospiv">Односпальні ліжка</a>
          <a className='footer-catalog__item' href="/miniatures">Двоярусні ліжка</a>
          <a className='footer-catalog__item' href="/makeup">Ліжка будиночком</a>
        </div>

        <div className='footer-info'>
          <div className='footer-info__title'>ІНФОРМАЦІЯ</div>
          <a className='footer-info__item' href="/">Головна</a>
          {/* <a className='footer-info__item' href="/about-us">Про нас</a> */}
          <Link to="aboutUs" className='footer-info__item' smooth={true} duration={1000} offset={50}>Про нас</Link>
          {/* <a className='footer-info__item' href="/about-us">Портфоліо</a> */}
          <Link to="instagram" className='footer-info__item' smooth={true} duration={1000} offset={50}>Портфоліо</Link>
          {/* <a className='footer-info__item' href="/about-us">Відгуки</a> */}
        </div>

        <div id='contacts' className='footer-right'>
          {/* <a className='footer-right__title' href="/contacts">КОНТАКТИ</a> */}
          <div className='footer-right__title'>КОНТАКТИ</div>
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

        <div className='footer-secondary__telephone'>
          {/* <CallBack
            buttonText="Ми Вам зателефонуємо"
            dialogTitle="Введіть Ваш номер телефону та коментар"
            dialogText="Ми зателефонуємо якнайшвидше та відповемо на всі ваші питання"
            confirmText="Надіслати" cancelText="Відміна" from="звідки - 'Головна сторінка'"
            fontSize="12px"
          /> */}
        </div>

        <div className='footer-secondary__info'>© 2023 Store Wood</div>
      </div>
    </footer>
  );
}
