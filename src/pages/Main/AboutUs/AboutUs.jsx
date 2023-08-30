import React, { useContext } from 'react';
import { Context } from '../../../Contex';
import './AboutUs.css';

export default function AboutUs() {
  const { language } = useContext(Context);

  const translations = {
    en: {
      title: 'About us',
      wooden: 'Wooden',
      handmade: 'Handmade beds',
      one: 'Natural processing',
      descriptionOne: 'Out of love for wood, we attach great importance to making all of our furniture from high-quality natural wood.',
      two: 'Individual product',
      descriptionTwo: 'We appreciate the individual approach and give the opportunity to adapt beds to individual needs, for us the smile of a child is the greatest satisfaction.',
      three: 'Quality',
      descriptionThree: 'We offer beds for children and teenagers, which are mainly manufactured in accordance with the highest safety standards.',
      four: 'Made in the EU',
      descriptionFour: 'Our team always takes care of every detail of our production, observing ecological standards, so all our beds are manufactured in the EU.',
    },
    de: {
      title: 'Über uns',
      wooden: 'Hölzern',
      handmade: 'Handgefertigte betten',
      one: 'Natürliche Verarbeitung',
      descriptionOne: 'Aus Liebe zum Holz legen wir großen Wert darauf, alle unsere Möbel aus hochwertigem Naturholz herzustellen.',
      two: 'Individuelles Produkt',
      descriptionTwo: 'Wir schätzen den individuellen Ansatz und bieten die Möglichkeit, Betten an individuelle Bedürfnisse anzupassen, für uns ist das Lächeln eines Kindes die größte Befriedigung.',
      three: 'Qualität',
      descriptionThree: 'Wir bieten Kinder- und Jugendbetten an, die größtenteils nach höchsten Sicherheitsstandards hergestellt werden.',
      four: 'Hergestellt in der EU',
      descriptionFour: 'Unser Team kümmert sich stets um jedes Detail unserer Produktion und beachtet dabei ökologische Standards, sodass alle unsere Betten in der EU hergestellt werden.',
    },
    pl: {
      title: 'O nas',
      wooden: 'Drewniany',
      handmade: 'Ręcznie robione łóżka',
      one: 'Naturalne przetwarzanie',
      descriptionOne: 'Z miłości do drewna przywiązujemy dużą wagę do tego, aby wszystkie nasze meble były wykonane z wysokiej jakości naturalnego drewna.',
      two: 'Produkt indywidualny',
      descriptionTwo: 'Cenimy indywidualne podejście i dajemy możliwość dostosowania łóżek do indywidualnych potrzeb, dla nas uśmiech dziecka jest największą satysfakcją.',
      three: 'Jakość',
      descriptionThree: 'Oferujemy łóżka dla dzieci i młodzieży, które produkowane są głównie z zachowaniem najwyższych standardów bezpieczeństwa.',
      four: 'Wyprodukowano w UE',
      descriptionFour: 'Nasz zespół zawsze dba o każdy szczegół naszej produkcji, zachowując standardy ekologiczne, dlatego wszystkie nasze łóżka produkowane są w UE.',
    },
  };

  const translationData = translations[language];

  const items = [
    { image: './img/aboutUs1.png', title: translationData.one, description: translationData.descriptionOne },
    { image: './img/aboutUs2.png', title: translationData.two, description: translationData.descriptionTwo },
    { image: './img/aboutUs3.png', title: translationData.three, description: translationData.descriptionThree },
    { image: './img/aboutUs4.png', title: translationData.four, description: translationData.descriptionFour }
  ];

  return (
    <div id='aboutUs' className='aboutUs'>

      <div className='aboutUs-title container'>
        <h2 className='aboutUs__titleSecondary'>{translationData.title}</h2>
        <div className='aboutUs__picture'>
          <img className='aboutUs__image' src="./img/catalogImage1.png" alt="Store Wood" />
        </div>
      </div>

      <div className='aboutUs-container container'>
        <h1 className='aboutUs__title'>{translationData.wooden}</h1>
        <div className='aboutUs__description'>{translationData.handmade}</div>
        <div className='aboutUs-box'>
          {items.map((item, index) => (
            <div key={index} className='aboutUs-box__item'>
              <div className='aboutUs-box__item-picture'>
                <img className='aboutUs-box__item-image' src={item.image} alt='Store Wood' />
              </div>
              <div className='aboutUs-box__item-text'>
                <h3 className='aboutUs-box__item-text-title'>{item.title}</h3>
                <div className='aboutUs-box__item-text-description'>{item.description}</div>
              </div>
            </div>
          ))}
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
