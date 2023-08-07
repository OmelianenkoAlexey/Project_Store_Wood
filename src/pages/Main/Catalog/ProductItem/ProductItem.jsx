import React, { useContext, useEffect, useState } from 'react';
import './ProductItem.css';
import Instagram from '../../Instagram/Instagram';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Context } from '../../../../Contex';

export default function ProductItem() {
  const [product, setProduct] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useContext(Context);

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
                    transition: 'transform 0.5s', // Добавляем плавный переход при изменении стилей
                    '&:hover': {
                      transform: 'scale(1.2)', // Увеличиваем размер на 20% при наведении
                    },
                  }}
                  onClick={handleClickLeft}
                />
                <div className='product-window__gallary-box__images'>
                  {product.img && product.img.slice(0, 5).map((item, index) => (
                    <div key={index} className='product-window__gallary-picture'>
                      <img className='product-window__gallary-image' src={item} alt='storeWood' />
                    </div>
                  ))}
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
              <h2 className='product-window__info-title'>{language === 'ua' ? product.title : product.titleEn}</h2>
              <div className='product-window__info-color'>Цвет кровати</div>
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

          <div className='productItem__description'>{language === 'ua' ? product.description : product.descriptionEn}</div>
          <div className='productItem__characteristic'>{language === 'ua' ? product.characteristic : product.characteristicEn}</div>

        </div>
      </div>
      <Instagram />
    </>
  );
}
