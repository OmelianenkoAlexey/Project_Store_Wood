import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../../Contex';
import './Beds.css';
import Instagram from '../../Instagram/Instagram';
import AboutUs from '../../AboutUs/AboutUs';

export default function Beds() {
  const { mainData, language } = useContext(Context);
  const [product, setProduct] = useState([]);
  const [mainImg, setMainImg] = useState('');
  const [textTitle, setTextTitle] = useState('');
  const [textDescription, setTextDescription] = useState('');

  const languageText = {
    en: {
      '/single-beds': {
        category: "Односпальні ліжка",
        mainImg: './img/catalog1.png',
        textTitle: 'Single beds',
        textDescription: 'Here you will find single beds with one sleeping area, where the box can be used as a compartment for bed linen or toys. Our beds are adapted to different needs. The practical product configurator will help you create the bed of your dreams.',
      },
      '/double-beds': {
        category: "Двоспалні ліжка",
        mainImg: './img/catalog2.png',
        textTitle: 'Double beds',
        textDescription: 'Here you will find single beds with one sleeping area, where the box can be used as a compartment for bed linen or toys. Our beds are adapted to different needs. The practical product configurator will help you create the bed of your dreams.',
      },
      '/bunk-beds': {
        category: "Двоповерхові ліжка",
        mainImg: './img/catalog3.png',
        textTitle: 'Bunk beds',
        textDescription: 'Here you will find single beds with one sleeping area, where the box can be used as a compartment for bed linen or toys. Our beds are adapted to different needs. The practical product configurator will help you create the bed of your dreams.',
      },
      '/house-beds': {
        category: "Ліжка будиночком",
        mainImg: './img/catalog4.png',
        textTitle: 'House beds',
        textDescription: 'Here you will find single beds with one sleeping area, where the box can be used as a compartment for bed linen or toys. Our beds are adapted to different needs. The practical product configurator will help you create the bed of your dreams.',
      },
    },
    pl: {
      '/single-beds': {
        category: "Односпальні ліжка",
        mainImg: './img/catalog1.png',
        textTitle: 'Pojedyńcze łóżka',
        textDescription: 'Tutaj znajdziesz łóżka jednoosobowe z jedną częścią sypialną, gdzie skrzynia może służyć jako schowek na pościel lub zabawki. Nasze łóżka są dostosowane do różnych potrzeb. Praktyczny konfigurator produktów pomoże Ci stworzyć łóżko Twoich marzeń.',
      },
      '/double-beds': {
        category: "Двоспалні ліжка",
        mainImg: './img/catalog2.png',
        textTitle: 'Podwójne łóżka',
        textDescription: 'Tutaj znajdziesz łóżka jednoosobowe z jedną częścią sypialną, gdzie skrzynia może służyć jako schowek na pościel lub zabawki. Nasze łóżka są dostosowane do różnych potrzeb. Praktyczny konfigurator produktów pomoże Ci stworzyć łóżko Twoich marzeń.',
      },
      '/bunk-beds': {
        category: "Двоповерхові ліжка",
        mainImg: './img/catalog3.png',
        textTitle: 'Łóżka piętrowe',
        textDescription: 'Tutaj znajdziesz łóżka jednoosobowe z jedną częścią sypialną, gdzie skrzynia może służyć jako schowek na pościel lub zabawki. Nasze łóżka są dostosowane do różnych potrzeb. Praktyczny konfigurator produktów pomoże Ci stworzyć łóżko Twoich marzeń.',
      },
      '/house-beds': {
        category: "Ліжка будиночком",
        mainImg: './img/catalog4.png',
        textTitle: 'łóżka domki',
        textDescription: 'Tutaj znajdziesz łóżka jednoosobowe z jedną częścią sypialną, gdzie skrzynia może służyć jako schowek na pościel lub zabawki. Nasze łóżka są dostosowane do różnych potrzeb. Praktyczny konfigurator produktów pomoże Ci stworzyć łóżko Twoich marzeń.',
      },
    },
    de: {
      '/single-beds': {
        category: "Односпальні ліжка",
        mainImg: './img/catalog1.png',
        textTitle: 'Einzelbetten',
        textDescription: 'Hier finden Sie Einzelbetten mit einer Liegefläche, wobei die Box als Fach für Bettwäsche oder Spielzeug genutzt werden kann. Unsere Betten sind an unterschiedliche Bedürfnisse angepasst. Der praktische Produktkonfigurator hilft Ihnen dabei, Ihr Traumbett zusammenzustellen.',
      },
      '/double-beds': {
        category: "Двоспалні ліжка",
        mainImg: './img/catalog2.png',
        textTitle: 'Doppelbett',
        textDescription: 'Hier finden Sie Einzelbetten mit einer Liegefläche, wobei die Box als Fach für Bettwäsche oder Spielzeug genutzt werden kann. Unsere Betten sind an unterschiedliche Bedürfnisse angepasst. Der praktische Produktkonfigurator hilft Ihnen dabei, Ihr Traumbett zusammenzustellen.',
      },
      '/bunk-beds': {
        category: "Двоповерхові ліжка",
        mainImg: './img/catalog3.png',
        textTitle: 'Etagenbett',
        textDescription: 'Hier finden Sie Einzelbetten mit einer Liegefläche, wobei die Box als Fach für Bettwäsche oder Spielzeug genutzt werden kann. Unsere Betten sind an unterschiedliche Bedürfnisse angepasst. Der praktische Produktkonfigurator hilft Ihnen dabei, Ihr Traumbett zusammenzustellen.',
      },
      '/house-beds': {
        category: "Ліжка будиночком",
        mainImg: './img/catalog4.png',
        textTitle: 'Hausbetten',
        textDescription: 'Hier finden Sie Einzelbetten mit einer Liegefläche, wobei die Box als Fach für Bettwäsche oder Spielzeug genutzt werden kann. Unsere Betten sind an unterschiedliche Bedürfnisse angepasst. Der praktische Produktkonfigurator hilft Ihnen dabei, Ihr Traumbett zusammenzustellen.',
      },
    },
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (language && currentPath in languageText[language]) {
      const { mainImg, textTitle, textDescription } = languageText[language][currentPath];
      setMainImg(mainImg);
      setTextTitle(textTitle);
      setTextDescription(textDescription);
    }
  }, [language]);


  // useEffect(() => {
  //   const currentPath = window.location.pathname;

  //   if (language) {

  //     if (currentPath === '/single-beds' && language === 'en') {
  //       setMainImg('./img/catalog1.png')
  //       setTextTitle("Single beds")
  //       setTextDescription('Here you will find single beds with one sleeping area, where the box can be used as a compartment for bed linen or toys. Our beds are adapted to different needs. The practical product configurator will help you create the bed of your dreams.')
  //     } else if (currentPath === '/double-beds' && language === 'en') {
  //       setMainImg('./img/catalog2.png')
  //       setTextTitle("Двоспалні ліжка")
  //       setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
  //     } else if (currentPath === '/bunk-beds' && language === 'en') {
  //       setMainImg('./img/catalog3.png')
  //       setTextTitle("Двоповерхові ліжка")
  //       setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
  //     } else if (currentPath === '/house-beds' && language === 'en') {
  //       setMainImg('./img/catalog4.png')
  //       setTextTitle("Ліжка будиночком")
  //       setTextDescription('Здесь вы найдете односпальные кровати с одной спальной зоной, где ящик можно использовать как отделение для постельного белья или игрушек. Наши кровати адаптированы к различным потребностям. Практичный конфигуратор изделий поможет собрать кровать вашей мечты.')
  //     }
  //   }

  // }, [language]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (mainData) {
      const filteredProducts = mainData[0].product.filter((item) => item.category === languageText[language][currentPath].category);
      setProduct(filteredProducts);
    }
  }, [mainData, language]);

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
      {/* <AboutUs />
      <Instagram /> */}
    </>
  );
}
