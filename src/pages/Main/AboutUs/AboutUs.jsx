import React, { useEffect, useState } from 'react';
import './AboutUs.css';

export default function AboutUs() {

  const [positionOne, setPositionOne] = useState(true);
  const [positionTwo, setPositionTwo] = useState(true);
  const [positionThree, setPositionThree] = useState(true);
  const [positionFour, setPositionFour] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThresholdOne = 3900;
      const scrollThresholdTwo = 4000;
      const scrollThresholdThree = 4300;
      const scrollThresholdFour = 4350;

      // Получаем текущую позицию прокрутки страницы
      const currentPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition >= scrollThresholdOne) {
        setPositionOne(false);
      } else {
        setPositionOne(true);
      }

      if (currentPosition >= scrollThresholdTwo) {
        setPositionTwo(false);
      } else {
        setPositionTwo(true);
      }

      if (currentPosition >= scrollThresholdThree) {
        setPositionThree(false);
      } else {
        setPositionThree(true);
      }

      if (currentPosition >= scrollThresholdFour) {
        setPositionFour(false);
      } else {
        setPositionFour(true);
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




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
            <div className={`aboutUs-box__item-text ${positionOne ? 'aboutUs-box__item-text-position' : ''}`}>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs2.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionTwo ? 'aboutUs-box__item-text-position' : ''}`}>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs3.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionThree ? 'aboutUs-box__item-text-position' : ''}`}>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs4.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionFour ? 'aboutUs-box__item-text-position' : ''}`}>Vivamus sed diam tortor. Aenean viverra bibendum purus a ultricies. </div>
          </div>
        </div>
      </div>
      <div className='firstPage-background'>
        <div className='firstPage-background__picture'>
          <img className='firstPage-background__image' src="./img/leaves.png" alt="Store Wood" />
        </div>
      </div>
    </div>
  );
}
