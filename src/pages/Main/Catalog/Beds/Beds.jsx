import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Contex';
import './Beds.css';
import Instagram from '../../Instagram/Instagram';

export default function Beds() {
  const { mainData } = useContext(Context);
  const [product, setProduct] = useState([]);
  const [mainImg, setMainImg] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textDescription, setTextDescription] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/single-beds') {
      setMainImg('./img/catalog1.png')
      setTextTitle("Односпальні ліжка")
      setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
    } else if (currentPath === '/double-beds') {
      setMainImg('./img/catalog2.png')
      setTextTitle("Двоспалні ліжка")
      setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
    } else if (currentPath === '/bunk-beds') {
      setMainImg('./img/catalog3.png')
      setTextTitle("Двоповерхові ліжка")
      setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
    } else if (currentPath === '/house-beds') {
      setMainImg('./img/catalog3.png')
      setTextTitle("Ліжка будиночком")
      setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
    }

  }, []);

  useEffect(() => {
    if (mainData) {
      const filteredProducts = mainData[0].product.filter((item) => item.category === textTitle);
      setProduct(filteredProducts);
    }
  }, [mainData]);




  return (
    <>
      <div className='singleBeds'>
        <div className='singleBeds-container'>

          <div className='singleBeds-box container'>
            <div className='singleBeds-box__picture'>
              <img className='singleBeds-box__image' src={mainImg} alt="storeWood" />
            </div>
            <div className='singleBeds-box__text'>
              <h2 className='singleBeds-box__text-title'>{textTitle}</h2>
              <div className='singleBeds-box__text-description'>{textDescription}</div>
            </div>
          </div>
          <div className='singleBeds-boxSecond'>

            <div className='singleBeds-boxSecond__picture1'>
              <img className='singleBeds-boxSecond__image' src="./img/leaves1.png" alt="Store Wood" />
            </div>

            <div className='singleBeds-boxSecond__picture2'>
              <img className='singleBeds-boxSecond__image' src="./img/leaves2.png" alt="Store Wood" />
            </div>

            <div className='singleBeds-boxSecond__container container'>

              {product.map((item, index) => (
                <a key={index} className='singleBeds-boxSecond__item' href="/">
                  <div className='singleBeds-boxSecond__item-picture'>
                    <img className='singleBeds-boxSecond__item-image' src={item.img[0]} alt="storeWood" />
                  </div>

                  <div className='singleBeds-boxSecond__item-text'>
                    <div className='singleBeds-boxSecond__item-text-title'>{item.title}</div>
                    <div className='singleBeds-boxSecond__item-text-price'>{item.price}</div>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
}
