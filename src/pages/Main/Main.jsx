import React from 'react';
// import ImageCarousel from './ImageCarousel/ImageCarousel';
import './Main.css';
import FirstPage from './FirstPage/FirstPage';
import Catalog from './Catalog/Catalog';
import AboutUs from './AboutUs/AboutUs';

export default function Main() {
  return (
    <main>
      {/* <ImageCarousel /> */}
      <FirstPage />
      <Catalog />
      <AboutUs />
    </main>
  );
}
