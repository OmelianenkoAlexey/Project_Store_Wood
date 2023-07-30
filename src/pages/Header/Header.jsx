import React from 'react';
import './Header.css';
// import Basket from '../../components/Basket/Basket';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-scroll';
import Burger from './Burger/Burger';
import { Link } from 'react-scroll';

export default function Header() {
  const location = useLocation();

  return (
    <>
      <div className='header container'>

        <a className='header-logo__picture' href="/">
          <img className='header-logo__image' src="./img/logo-header.svg" alt="legenda-parfum-logo" />
        </a>

        <nav className='header-category'>
          <a className={`header-category__item ${location.pathname === '/' ? 'action' : ''}`} href="/">Головна</a>

          <Link to="catalog" className='header-category__item' smooth={true} duration={500} offset={50}>Каталог</Link>

          <Link to="aboutUs" className='header-category__item' smooth={true} duration={1000} offset={50}>Про нас</Link>

          <Link to="instagram" className='header-category__item' smooth={true} duration={1000} offset={50}>Портфоліо</Link>

          {/* <a className={`header-category__item ${location.pathname === '/news2023' ? 'action' : ''}`} href="/">Відгуки</a> */}

          {/* <a className={`header-category__item ${location.pathname === '/about-us' ? 'action' : ''}`} href="/">Контакти</a> */}
          <Link to="contacts" className='header-category__item' smooth={true} duration={1000} offset={50}>Контакти</Link>

        </nav>

        <div className='header-language'>
          <a className='header-language__active' href="/">UA</a>
          <a className='header-language__en' href="/">EN</a>
        </div>

        {/* <Basket /> */}
        <Burger />

      </div >
    </>
  );
}
