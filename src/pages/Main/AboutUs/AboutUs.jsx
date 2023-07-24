import React from 'react';
import './AboutUs.css';

export default function AboutUs() {

  return (
    <div className='aboutUs'>

      <div className='aboutUs-title container'>
        <h2 className='aboutUs__titleSecondary'>Про нас</h2>
        <div className='aboutUs__picture'>
          <img className='aboutUs__image' src="./img/catalogImage1.png" alt="Store Wood" />
        </div>
      </div>

      <div className='aboutUs-container container'>
        <h1 className='aboutUs__title'>Дерев’яні</h1>
        <div className='aboutUs__description'>ліжка ручної роботи</div>
        <div className='aboutUs-box'>
          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs1.png" alt="Store Wood" />
            </div>
            <div className='aboutUs-box__item-text'>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs2.png" alt="Store Wood" />
            </div>
            <div className='aboutUs-box__item-text'>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs3.png" alt="Store Wood" />
            </div>
            <div className='aboutUs-box__item-text'>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs4.png" alt="Store Wood" />
            </div>
            <div className='aboutUs-box__item-text'>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>
        </div>
      </div>
      <div className='firstPage-background'></div>
    </div>
  );
}
