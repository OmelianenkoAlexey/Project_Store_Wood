import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import './AboutUs.css';

export default function AboutUs() {
  const { language } = useContext(Context);
  const [positionOne, setPositionOne] = useState(true);
  const [positionTwo, setPositionTwo] = useState(true);
  const [positionThree, setPositionThree] = useState(true);
  const [positionFour, setPositionFour] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThresholdOne = 3700;
      const scrollThresholdTwo = 3800;
      const scrollThresholdThree = 4000;
      const scrollThresholdFour = 4100;

      // Получаем текущую позицию прокрутки страницы
      const currentPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition >= scrollThresholdOne) {
        setPositionOne(false);
      } else {
        setPositionOne(true);
      }

      if (currentPosition >= scrollThresholdTwo) {
        setPositionTwo(false);
      } else {
        setPositionTwo(true);
      }

      if (currentPosition >= scrollThresholdThree) {
        setPositionThree(false);
      } else {
        setPositionThree(true);
      }

      if (currentPosition >= scrollThresholdFour) {
        setPositionFour(false);
      } else {
        setPositionFour(true);
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
    <div id='aboutUs' className='aboutUs'>

      <div className='aboutUs-title container'>
        <h2 className='aboutUs__titleSecondary'>{language === 'ua' ? 'Про нас' : 'About us'}</h2>
        <div className='aboutUs__picture'>
          <img className='aboutUs__image' src="./img/catalogImage1.png" alt="Store Wood" />
        </div>
      </div>

      <div className='aboutUs-container container'>
        <h1 className='aboutUs__title'>{language === 'ua' ? 'Дерев’яні' : 'Wooden'}</h1>
        <div className='aboutUs__description'>{language === 'ua' ? 'ліжка ручної роботи' : 'handmade beds'}</div>
        <div className='aboutUs-box'>
          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs1.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionOne ? 'aboutUs-box__item-text-position' : ''}`}>
              <h3 className='aboutUs-box__item-text-title'>{language === 'ua' ? 'Натуральная обработка' : 'Natural processing'}</h3>
              <div className='aboutUs-box__item-text-description'>{language === 'ua' ? 'Из любви к дереву мы придаем очень большое значение изготовлению всей нашей мебели из высококачественного массива натурального дерева.' : 'Out of love for wood, we attach great importance to making all of our furniture from high-quality natural wood.'}</div>
            </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs2.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionTwo ? 'aboutUs-box__item-text-position' : ''}`}>
              <h3 className='aboutUs-box__item-text-title'>{language === 'ua' ? 'Индивидуальный продукт' : 'Individual product'}</h3>
              <div className='aboutUs-box__item-text-description'>{language === 'ua' ? 'Мы ценим индивидуальный подход и даем возможность подогнать кровати под индивидуальные потребности, для нас улыбка ребенка – это самое большое удовлетворение.' : 'We appreciate the individual approach and give the opportunity to adapt beds to individual needs, for us the smile of a child is the greatest satisfaction.'}</div>
            </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs3.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionThree ? 'aboutUs-box__item-text-position' : ''}`}>
              <h3 className='aboutUs-box__item-text-title'>{language === 'ua' ? 'Качество' : 'Quality'}</h3>
              <div className='aboutUs-box__item-text-description'>{language === 'ua' ? 'Мы предлагаем кровати для детей и подростков, которые в основном производятся в соответствии с самыми высокими стандартами безопасности.' : 'We offer beds for children and teenagers, which are mainly manufactured in accordance with the highest safety standards.'}</div>
            </div>
          </div>

          <div className='aboutUs-box__item'>
            <div className='aboutUs-box__item-picture'>
              <img className='aboutUs-box__item-image' src="./img/aboutUs4.png" alt="Store Wood" />
            </div>
            <div className={`aboutUs-box__item-text ${positionFour ? 'aboutUs-box__item-text-position' : ''}`}>
              <h3 className='aboutUs-box__item-text-title'>{language === 'ua' ? 'Сделано в ЕС' : 'Made in the EU'}</h3>
              <div className='aboutUs-box__item-text-description'>{language === 'ua' ? 'Наша команда всегда заботится о каждой детали нашей продукции, соблюдая экологические стандарты, поэтому все наши кровати производятся в ЕС.' : 'Our team always takes care of every detail of our production, observing ecological standards, so all our beds are manufactured in the EU.'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='firstPage-background'>
        <div className='firstPage-background__picture1'>
          <img className='firstPage-background__image' src="./img/leaves1.png" alt="Store Wood" />
        </div>
      </div>
    </div>
  );
}
