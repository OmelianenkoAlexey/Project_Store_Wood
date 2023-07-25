import React, { useEffect, useState } from 'react';
import './Catalog.css';

export default function Catalog() {

  const [item, setItem] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Задайте значение, когда нужно переключить состояние
      const scrollThreshold = 600; // Например, переключим состояние при прокрутке на 300 пикселей

      // Получаем текущую позицию прокрутки страницы
      const currentPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      // Проверяем, достигли ли пороговой точки для переключения состояния
      if (currentPosition >= scrollThreshold) {
        setItem(false);
      } else {
        setItem(true);
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
    <div className='catalog'>
      <div className='catalog-box__item-bg1'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage2.png" alt="Store Wood" />
      </div>
      <div className='catalog-box__item-bg2'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage3.png" alt="Store Wood" />
      </div>
      <div className='catalog-box__item-bg3'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage4.png" alt="Store Wood" />
      </div>

      <div className='catalog__title-box container'>
        <h2 className='catalog__title'>Каталог продукції</h2>
        <div className='catalog__title-picture'>
          <img className='catalog__title-image' src="./img/catalogImage1.png" alt="Store Wood" />
        </div>
      </div>

      <div className='catalog-box container'>
        <div className='catalog-box__item'>
          <div className='catalog-box__item-text'>
            <h3 className='catalog-box__item-text-title'>Двоспальні ліжка</h3>
            <a className='catalog-box__item-text-link' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
              Детальніше</a>
          </div>
          <div className={`catalog-box__item-picture ${item ? 'catalog-box__item-picture-none' : ''}`}>
            <img className={`catalog-box__item-image ${item ? 'catalog-box__item-image-left' : ''}`} src="./img/catalog1.png" alt="Store Wood" />
          </div>
          {/* <div className='catalog-box__item-bg'>
            <img className='catalog-box__item-bg-image' src="./img/firstPageImage2.png" alt="Store Wood" />
          </div> */}
        </div>

        <div className='catalog-box__item'>
          <div className='catalog-box__item-text'>
            <h3 className='catalog-box__item-text-title'>Двоспальні ліжка</h3>
            <a className='catalog-box__item-text-link' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
              Детальніше</a>
          </div>
          <div className='catalog-box__item-picture catalog-box__item-picture-md'>
            <img className='catalog-box__item-image' src="./img/catalog2.png" alt="Store Wood" />
          </div>
          {/* <div className='catalog-box__item-bg'>
            <img className='catalog-box__item-bg-image' src="./img/firstPageImage2.png" alt="Store Wood" />
          </div> */}
        </div>

        <div className='catalog-box__item'>
          <div className='catalog-box__item-text'>
            <h3 className='catalog-box__item-text-title'>Двоспальні ліжка</h3>
            <a className='catalog-box__item-text-link' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
              Детальніше</a>
          </div>
          <div className='catalog-box__item-picture'>
            <img className='catalog-box__item-image' src="./img/catalog3.png" alt="Store Wood" />
          </div>
          {/* <div className='catalog-box__item-bg'>
            <img className='catalog-box__item-bg-image' src="./img/firstPageImage2.png" alt="Store Wood" />
          </div> */}
        </div>

        <div className='catalog-box__item'>
          <div className='catalog-box__item-text'>
            <h3 className='catalog-box__item-text-title'>Двоспальні ліжка</h3>
            <a className='catalog-box__item-text-link' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
              Детальніше</a>
          </div>
          <div className='catalog-box__item-picture catalog-box__item-picture-md'>
            <img className='catalog-box__item-image' src="./img/catalog4.png" alt="Store Wood" />
          </div>
          {/* <div className='catalog-box__item-bg'>
            <img className='catalog-box__item-bg-image' src="./img/firstPageImage2.png" alt="Store Wood" />
          </div> */}
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
