import React, { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Context } from '../../../Contex';
import './Instagram.css';

export default function Instagram() {
  const { mainData } = useContext(Context);
  const [positionOne, setPositionOne] = useState(false);
  const [click, setClick] = useState(false);
  const [image, setImage] = useState(false);
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);


  const loadImage = (src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image); // Вместо src возвращаем сам объект изображения
    image.onerror = (error) => reject(error);
    image.src = src;
  });

  useEffect(() => {
    if (positionOne) {
      const items = document.querySelectorAll('.instagram-box__item-image');

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('instagram-box__item-image-opacity');
        }, (index + 1) * 300);
      });
    }
  }, [positionOne]);

  useEffect(() => {

    if (mainData) {
      setData(mainData[0].carousel);
    }
  }, [mainData]);


  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await Promise.all(data.map((item) => loadImage(item)));
        // Здесь loadedImages будет массивом объектов изображений, которые успешно загрузились.
        // Вы можете выполнить дополнительные действия с загруженными изображениями здесь.
        console.log(loadedImages);
        setImg(loadedImages);
      } catch (error) {
        // Обработка ошибок при загрузке изображений
        console.error(error);
      }
    };

    loadImages();
  }, [data]);




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


  const [index, setIndex] = useState(0);

  const handleClickLeft = () => {
    const newIndex = index === 0 ? img.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleClickRight = () => {
    const newIndex = index === img.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const newNews = [...img.slice(index, img.length), ...img.slice(0, index)];
  console.log(newNews);

  const handleClickOpen = (item) => {
    setClick(true);
    setImage(item);
    document.body.classList.add('body-fixed');
  };

  const touchButtonClose = () => {
    setClick(false);
    document.body.classList.remove('body-fixed');
  };


  const Screen768 = useMediaQuery('(min-width:768px)');

  return (
    <div id='instagram' className='instagram'>

      <div onClick={touchButtonClose} className={`firstPage-window ${click ? 'opacity' : ''}`}></div>

      <div className={`instagram-window__open ${click ? 'instagram-window__open-true opacity' : ''}`}>
        {/* <img onClick={touchButtonClose} className='firstPage-window__open-close' src="./img/close-window.svg" alt="" /> */}
        <img onClick={touchButtonClose} className='instagram-window__open-image' src={image} alt="" />
      </div>

      <div className='instagram-bg'>
        <img className='instagram-image' src="./img/catalogImage3.png" alt="Store Wood" />
      </div>
      <div className='instagram-container container'>

        <h2 className='instagram__title'>Наші роботи</h2>
        {/* <a className='instagram__link' href='https://www.instagram.com/legenda_parfum/' target="_blank" rel="noreferrer">@storewood</a> */}

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

            {Screen768
              ? newNews.slice(0, 4).map((item, index) => (
                <div onClick={() => handleClickOpen(item)} key={index} className='instagram-box__item'>
                  <img className='instagram-box__item-image' src={item.currentSrc} alt="" />
                </div>
              ))
              : newNews.slice(0, 2).map((item, index) => (
                <div onClick={() => handleClickOpen(item)} key={index} className='instagram-box__item'>
                  <img className='instagram-box__item-image' src={item} alt="" />
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
