import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Contex';
import './Beds.css';
import Instagram from '../../Instagram/Instagram';
import AboutUs from '../../AboutUs/AboutUs';


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
      setMainImg('./img/catalog4.png')
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

  const handleItem = async (item) => {

    await localStorage.setItem('Items', JSON.stringify(item));

    window.location.href = '/product-item';
  };


  return (
    <>
      <div className='beds'>

        <div className='beds-box container'>
          <div className='beds-box__picture'>
            <img className='beds-box__image' src={mainImg} alt="storeWood" />
          </div>
          <div className='beds-box__text'>
            <h2 className='beds-box__text-title'>{textTitle}</h2>
            <div className='beds-box__text-description'>{textDescription}</div>
          </div>
        </div>
        <div className='beds-boxSecond'>

          <div className='beds-boxSecond__picture1'>
            <img className='beds-boxSecond__image' src="./img/leaves1.png" alt="Store Wood" />
          </div>

          <div className='beds-boxSecond__picture2'>
            <img className='beds-boxSecond__image' src="./img/leaves2.png" alt="Store Wood" />
          </div>

          <div className='beds-boxSecond__container container'>

            {product.map((item, index) => (
              <div onClick={() => handleItem(item)} key={index} className='beds-boxSecond__item'>
                <div className='beds-boxSecond__item-picture'>
                  <img className='beds-boxSecond__item-image' src={item.img[0]} alt="storeWood" />
                </div>

                <div className='beds-boxSecond__item-text'>
                  <div className='beds-boxSecond__item-text-title'>{item.title}</div>
                  <div className='beds-boxSecond__item-text-price'>{item.price}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <AboutUs />
      <Instagram />
    </>
  );
}
