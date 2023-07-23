import React from 'react';
import './FirstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faSquareFacebook, faViber } from '@fortawesome/free-brands-svg-icons';

export default function FirstPage() {

  return (
    <div className='firstPage'>

      <div className='firstPage-box container'>
        <h2 className='firstPage-box__title'>StoreWood</h2>
        <div className='firstPage-box__description'>якісні дитячі ліжка та меблі</div>
        <div className='firstPage-box__btn'>Замовити дизайн</div>
        <div className='firstPage-box__social'>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='firstPage-box__social-icon' />
          </a>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className='firstPage-box__social-icon' />
            {/* <FontAwesomeIcon icon={faFacebook} className='firstPage-box__social-icon' /> */}
          </a>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faViber} className='firstPage-box__social-icon' />
          </a>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className='firstPage-background'></div>
    </div>
  );
}
