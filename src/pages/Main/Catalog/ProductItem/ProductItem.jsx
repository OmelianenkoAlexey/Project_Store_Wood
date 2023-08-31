import React, { useContext, useEffect, useState } from 'react';
import './ProductItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Context } from '../../../../Contex';

export default function ProductItem() {
  const [product, setProduct] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useContext(Context);

  const translations = {
    en: {
      title: 'bed color',
      productTitle: product.titleEn,
      productDescription: product.descriptionEn,
      productCharacteristic: product.characteristicEn,
    },
    de: {
      title: 'Bettfarbe',
      productTitle: product.titleDe,
      productDescription: product.descriptionDe,
      productCharacteristic: product.characteristicDe,
    },
    pl: {
      title: 'kolor łóżka',
      productTitle: product.titlePl,
      productDescription: product.descriptionPl,
      productCharacteristic: product.characteristicPl,
    },
  }

  const translationData = translations[language];

  useEffect(() => {
    const cartItems = localStorage.getItem('Items');
    if (cartItems) {
      const cartItemsPars = JSON.parse(cartItems);
      console.log(cartItemsPars);
      setProduct(cartItemsPars)
    }
  }, []);



  const handleClickLeft = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(product.img.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (currentImageIndex === product.img.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const Screen768 = useMediaQuery('(min-width:768px)');


  return (
    <>
      <div className='productItem'>

        <div className='productItem-container container'>
          <div className='productItem-box'>
            <div className='product-window__gallary'>


              <div className='product-window__gallary-pictureMain'>
                {product.img && <img className='product-window__gallary-image' src={product.img[currentImageIndex]} alt="storeWood" />}
              </div>
              <div className='product-window__gallary-box'>
                <ArrowBackIosIcon
                  sx={{
                    cursor: 'pointer',
                    color: '#19772E',
                    fontSize: '30px',
                    transition: 'transform 0.5s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                  onClick={handleClickLeft}
                />
                <div className='product-window__gallary-box__images'>



                  {Screen768 ? product.img && product.img.slice(0, 5).map((item, index) => (
                    <div key={index} className='product-window__gallary-picture'>
                      <img className='product-window__gallary-image' src={item} alt='storeWood' />
                    </div>
                  ))
                    :
                    product.img && product.img.slice(0, 3).map((item, index) => (
                      <div key={index} className='product-window__gallary-picture'>
                        <img className='product-window__gallary-image' src={item} alt='storeWood' />
                      </div>
                    ))
                  }
                </div>
                <ArrowForwardIosIcon
                  sx={{
                    cursor: 'pointer',
                    color: '#19772E',
                    fontSize: '30px',
                    transition: 'transform 0.5s', // Добавляем плавный переход при изменении стилей
                    '&:hover': {
                      transform: 'scale(1.2)', // Увеличиваем размер на 20% при наведении
                    },
                  }}
                  onClick={handleClickRight}
                />
              </div>
            </div>

            <div className='product-window__info'>
              <div className='product-window__info-starBox'>
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <div className='product-window__info-starBox-text'>5.00</div>
              </div>
              <h2 className='product-window__info-title'>{translationData.productTitle}</h2>
              <div className='product-window__info-color'>{translationData.title}</div>
              <div className='product-window__info-color-box color-box'>
                <div className='color-box__item item1'></div>
                <div className='color-box__item item2'></div>
                <div className='color-box__item item3'></div>
                <div className='color-box__item item4'></div>
                <div className='color-box__item item5'></div>
              </div>
              <div className='product-window__info-price'>{product.price} €</div>

            </div>
          </div>

          <div className='productItem__description'>{translationData.productDescription}</div>
          <div className='productItem__characteristic'>{translationData.productCharacteristic}</div>

        </div>
      </div>
    </>
  );
}
