import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './GridContainer.css';
import Instagram from '../Main/Instagram/Instagram';
import AboutUs from '../Main/AboutUs/AboutUs';
import Catalog from '../Main/Catalog/Catalog';

export default function GridContainer({ children }) {
  return (
    <div className='GridTemplate'>
      <Header />
      {children}
      <Catalog />
      <AboutUs />
      <Instagram />
      <Footer />
    </div>
  );
}
