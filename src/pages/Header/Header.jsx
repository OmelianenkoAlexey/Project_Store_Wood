import React from 'react';
import './Header.css';
// import Basket from '../../components/Basket/Basket';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import Burger from './Burger/Burger';

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

          <a className={`header-category__item ${location.pathname === '/rospiv' ? 'action' : ''}`} href="/">Каталог</a>

          <a className={`header-category__item ${location.pathname === '/miniatures' ? 'action' : ''}`} href="/">Про нас</a>

          <a className={`header-category__item ${location.pathname === '/makeup' ? 'action' : ''}`} href="/">Портфоліо</a>

          <a className={`header-category__item ${location.pathname === '/news2023' ? 'action' : ''}`} href="/">Відгуки</a>

          <a className={`header-category__item ${location.pathname === '/about-us' ? 'action' : ''}`} href="/">Контакти</a>


        </nav>

        <div className='header-language'>
            <div className='header-language__active' href="">UA</div>
            <a className='header-language__en' href="">EN</a>
            {/* <a className='header-language__en' href="">DE</a> */}
          </div>

        {/* <Basket /> */}
        <Burger />

      </div >
    </>
  );
}
