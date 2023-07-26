import React, { useState } from 'react';
import './FirstPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

export default function FirstPage() {

  const [click, setClick] = useState(false);

  const touchButton = () => {

    setClick(true);


    document.body.classList.add('body-fixed');
  };

  const touchButtonClose = () => {

    setClick(false);


    document.body.classList.remove('body-fixed');
  };



  return (
    <div className='firstPage'>

      <div onClick={touchButtonClose} className={`firstPage-window ${click ? 'opacity' : ''}`}></div>

      <div className={`firstPage-window__open ${click ? 'firstPage-window__open-true opacity'  : ''}`}>
        <img onClick={touchButtonClose} className='firstPage-window__open-close' src="./img/close-window.svg" alt="" />
      </div>

      <div className='firstPage-box container'>
        <h2 className='firstPage-box__title'>StoreWood</h2>
        <div className='firstPage-box__description'>якісні дитячі ліжка та меблі</div>
        <div onClick={touchButton} className='firstPage-box__btn'>Замовити дизайн</div>
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
      <div className='firstPage__pictureFirst'>
        <img className='firstPage__image' src="./img/firstPageImage1.png" alt="Store Wood" />
      </div>
      <div className='firstPage__pictureSecond'>
        <img className='firstPage__image' src="./img/firstPageImage2.png" alt="Store Wood" />
      </div>
      <div className='firstPage-background'>
        <div className='firstPage-background__picture'>
          <img className='firstPage-background__image' src="./img/leaves.png" alt="Store Wood" />
        </div>
      </div>
    </div>
  );
}
