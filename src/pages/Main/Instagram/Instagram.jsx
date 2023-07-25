import React, { useEffect, useState } from 'react';
import './Instagram.css';

export default function Instagram() {

  const [positionOne, setPositionOne] = useState(false);

  useEffect(() => {
    if (positionOne) {
      const items = document.querySelectorAll('.instagram-box__item-image');

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('instagram-box__item-image-opacity');
        }, (index + 1) * 500);
      });
    }
  }, [positionOne]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 4800;

      // Получаем текущую позицию прокрутки страницы
      const currentPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition >= scrollThreshold) {
        setPositionOne(true);
      } else {
        setPositionOne(false);
        const items = document.querySelectorAll('.instagram-box__item-image');
        items.forEach((item, index) => {
            item.classList.remove('instagram-box__item-image-opacity');
        });
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

      {/* <div className='firstPage-background'>
        <div className='firstPage-background__picture'>
          <img className='firstPage-background__image' src="./img/leaves.png" alt="Store Wood" />
        </div>
      </div> */}
    </div>
  );
}
