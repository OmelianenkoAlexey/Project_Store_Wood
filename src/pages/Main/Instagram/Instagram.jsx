import React, { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Context } from '../../../Contex';
import './Instagram.css';

export default function Instagram() {
  const { mainData, language } = useContext(Context);
  const [click, setClick] = useState(false);
  const [image, setImage] = useState(false);
  const [load, setLoad] = useState([]);

  const loadImage = (src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = src;
  });

  const loadImages = async (array) => {
    try {
      const loadedImages = await Promise.all(array.map((item) => loadImage(item)));
      setLoad(loadedImages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (mainData) {
      loadImages(mainData[0].gallery);
    }
  }, [mainData]);

  const [index, setIndex] = useState(0);

  const handleClickLeft = () => {
    const newIndex = index === 0 ? load.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleClickRight = () => {
    const newIndex = index === load.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const newNews = [...load.slice(index, load.length), ...load.slice(0, index)];

  const handleClickOpen = (item) => {
    setClick(true);
    setImage(item);
    document.body.classList.add('body-fixed');
  };

  const touchButtonClose = () => {
    setClick(false);
    document.body.classList.remove('body-fixed');
  };

  const Screen992 = useMediaQuery('(min-width:992px)');

  return (
    <div id='instagram' className='instagram'>

      <div onClick={touchButtonClose} className={`firstPage-window ${click ? 'opacity' : ''}`}></div>

      <div className={`instagram-window__open ${click ? 'instagram-window__open-true opacity' : ''}`}>
        <img onClick={touchButtonClose} className='instagram-window__open-image' src={image.currentSrc} alt="" />
      </div>

      <div className='instagram-bg'>
        <img className='instagram-image' src="./img/catalogImage3.png" alt="Store Wood" />
      </div>
      <div className='instagram-container container'>

        <h2 className='instagram__title'>{language === 'ua' ? 'Наші роботи' : 'Our works'}</h2>

        <div className='instagram-box-arrow'>

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

          <div className='instagram-box'>

            {Screen992
              ? newNews.slice(0, 4).map((item, index) => (
                <div onClick={() => handleClickOpen(item)} key={index} className='instagram-box__item'>
                  <img className='instagram-box__item-image' src={item.currentSrc} alt="" />
                </div>
              ))
              : newNews.slice(0, 2).map((item, index) => (
                <div onClick={() => handleClickOpen(item)} key={index} className='instagram-box__item'>
                  <img className='instagram-box__item-image' src={item.currentSrc} alt="" />
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
    </div>
  );
}
