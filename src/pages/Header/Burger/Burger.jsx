import React, { useState } from 'react';
import './Burger.css';
import { Link } from 'react-scroll';

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpacityOne, setIsOpacityOne] = useState(false);
  const [isOpacityTwo, setIsOpacityTwo] = useState(false);
  const [isOpacityThree, setIsOpacityThree] = useState(false);
  const [isOpacityFour, setIsOpacityFour] = useState(false);
  const [isOpacityFive, setIsOpacityFive] = useState(false);
  const [isOpacitySix, setIsOpacitySix] = useState(false);
  const [isOpacityEight, setIsOpacityEight] = useState(false);

  const title = [
    { title: 'Головна', href: '/', active: isOpacityOne },
    { title: 'Односпальні ліжка', href: '/single-beds', active: isOpacityTwo },
    { title: 'Двоспальні ліжка', href: '/double-beds', active: isOpacityTwo },
    { title: 'Двоярусні ліжка', href: '/bunk-beds', active: isOpacityThree },
    { title: 'Ліжка будиночком', href: '/house-beds', active: isOpacityFour },
    { title: 'Про нас', to: 'aboutUs', active: isOpacityFive },
    { title: 'Галерея', to: 'instagram', active: isOpacitySix },
    { title: 'Контакти', to: 'contacts', active: isOpacityEight }
  ];

  const handleClick = () => {
    document.body.classList.toggle('body-fixed');
    setIsOpen(!isOpen);
    setIsOpacityOne(false);
    setIsOpacityTwo(false);
    setIsOpacityThree(false);
    setIsOpacityFour(false);
    setIsOpacityFive(false);
    setIsOpacitySix(false);
    setIsOpacityEight(false);

    setTimeout(() => {
      setIsOpacityOne(true);
    }, 100);

    setTimeout(() => {
      setIsOpacityTwo(true);
    }, 200);

    setTimeout(() => {
      setIsOpacityThree(true);
    }, 300);

    setTimeout(() => {
      setIsOpacityFour(true);
    }, 400);

    setTimeout(() => {
      setIsOpacityFive(true);
    }, 500);

    setTimeout(() => {
      setIsOpacitySix(true);
    }, 600);

    setTimeout(() => {
      setIsOpacityEight(true);
    }, 700);

  };

  return (
    <>
      <div className={`burger__btn ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <span className="burger__btn-row"></span>
        <span className="burger__btn-row"></span>
        <span className="burger__btn-row"></span>
      </div>
      {isOpen && (

        <div className='burger-category'>
          {title.map((item, index) => (
            item.to ? (
              <Link
                key={index}
                className={`burger-category__item ${item.active ? 'burger-category__item__active' : ''}`}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => {handleClick()}}
              >
                {item.title}
              </Link>
            ) : (
              <a
                key={index}
                className={`burger-category__item ${item.active ? 'burger-category__item__active' : ''}`}
                href={item.href}
              >
                {item.title}
              </a>
            )
          ))}
        </div>
      )}
    </>
  );
}
