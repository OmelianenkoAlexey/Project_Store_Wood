import React from 'react';
import './Instagram.css';

export default function Instagram() {

  return (
    <div className='instagram'>
      <div className='instagram-bg'>
        <img className='instagram-image' src="./img/catalogImage3.png" alt="Store Wood" />
      </div>
      <div className='instagram-container container'>

        <h2 className='instagram__title'>Наш інстаграм</h2>
        <a className='instagram__link' href='https://www.instagram.com/legenda_parfum/' target="_blank" rel="noreferrer">@storewood</a>

        <div className='instagram-box'>
          <div className='instagram-box__item'>
            <img className='instagram-box__item-image' src="./img/instagram1.png" alt="Store Wood" />
          </div>

          <div className='instagram-box__item'>
            <img className='instagram-box__item-image' src="./img/instagram2.png" alt="Store Wood" />
          </div>

          <div className='instagram-box__item'>
            <img className='instagram-box__item-image' src="./img/instagram3.png" alt="Store Wood" />
          </div>

          <div className='instagram-box__item'>
            <img className='instagram-box__item-image' src="./img/instagram1.png" alt="Store Wood" />
          </div>
        </div>
      </div>

      <div className='firstPage-background'></div>
    </div>
  );
}
