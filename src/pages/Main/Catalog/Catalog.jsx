import React from 'react';
import './Catalog.css';

export default function Catalog() {

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
          <div className='catalog-box__item-picture'>
            <img className='catalog-box__item-image' src="./img/catalog1.png" alt="Store Wood" />
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
            <img className='catalog-box__item-image' src="./img/catalog1.png" alt="Store Wood" />
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
            <img className='catalog-box__item-image' src="./img/catalog1.png" alt="Store Wood" />
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
            <img className='catalog-box__item-image' src="./img/catalog1.png" alt="Store Wood" />
          </div>
          {/* <div className='catalog-box__item-bg'>
            <img className='catalog-box__item-bg-image' src="./img/firstPageImage2.png" alt="Store Wood" />
          </div> */}
        </div>

      </div>

    </div>
  );
}
