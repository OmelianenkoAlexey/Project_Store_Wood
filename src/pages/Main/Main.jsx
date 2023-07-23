import React from 'react';
// import ImageCarousel from './ImageCarousel/ImageCarousel';
import './Main.css';
import FirstPage from './FirstPage/FirstPage';
import Catalog from './Catalog/Catalog';

export default function Main() {
  return (
    <main>
      {/* <ImageCarousel /> */}
      <FirstPage />
      <Catalog />
    </main>
  );
}
