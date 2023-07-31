import React from 'react';
import './SingleBeds.css';

export default function SingleBeds() {
  return (
    <div className='singleBeds'>
      <div className='singleBeds-container container'>

        <div className='singleBeds-box'>
          <div className='singleBeds-box__picture'>
            <img className='singleBeds-box__image' src="./img/singleBeds.JPG" alt="storeWood" />
          </div>
          <div className='singleBeds-box__text'>
            <h2 className='singleBeds-box__text-title'>Односпальні ліжка</h2>
            <div className='singleBeds-box__text-description'>Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек.
              Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.</div>
          </div>
        </div>
        <div className='singleBeds-boxSecond'>
          <div className='singleBeds-boxSecond__item'></div>
        </div>


      </div>
    </div>
  );
}
