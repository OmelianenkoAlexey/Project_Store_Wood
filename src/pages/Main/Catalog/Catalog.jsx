import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import './Catalog.css';

export default function Catalog() {
  const { language } = useContext(Context);

  const translations = {
    en: {
      title: 'Catalog of products',
      singleBeds: 'Single beds',
      details: 'More details',
      double: 'Double beds',
      bunk: 'Bunk beds',
      bedHouse: 'The bed is a house',
    },
    de: {
      title: 'Produktkatalog',
      singleBeds: 'Einzelbetten',
      details: 'Mehr Details',
      double: 'Doppelbett',
      bunk: 'Etagenbett',
      bedHouse: 'Das Bett ist ein Haus',
    },
    pl: {
      title: 'Katalog produktów',
      singleBeds: 'Pojedyńcze łóżka',
      details: 'Więcej szczegółów',
      double: 'Podwójne łóżka',
      bunk: 'Łóżka piętrowe',
      bedHouse: 'Łóżko jest domem',
    },
  };

  const translationData = translations[language];

  return (
    <div id='catalog' className='catalog'>
      <div className='catalog-box__item-bg1'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage2.png" alt="Store Wood" />
      </div>
      <div className='catalog-box__item-bg2'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage3.png" alt="Store Wood" />
      </div>
      <div className='catalog-box__item-bg3'>
        <img className='catalog-box__item-bg-image' src="./img/catalogImage4.png" alt="Store Wood" />
      </div>

      <div className='catalog__title-box container'>
        <h2 className='catalog__title'>{translationData.title}</h2>
        <div className='catalog__title-picture'>
          <img className='catalog__title-image' src="./img/catalogImage1.png" alt="Store Wood" />
        </div>
      </div>

      <div className='catalog-box container'>
        <a className='catalog-box__item' href="/single-beds">
          <div className='catalog-box__item-text'>

            <h3 className='catalog-box__item-text-title'>{translationData.singleBeds}</h3>
            <div className='catalog-box__item-text-link'>
              {translationData.details}</div>
          </div>
          <div className='catalog-box__item-picture'>
            <img className='catalog-box__item-image' src="./img/catalog1.png" alt="Store Wood" />
          </div>
        </a>

        <a className='catalog-box__item' href="/double-beds">
          <div className='catalog-box__item-text  catalog-box__item-text-left'>
            <h3 className='catalog-box__item-text-title'>{translationData.double}</h3>
            <div className='catalog-box__item-text-link'>
              {translationData.details}</div>
          </div>
          <div className='catalog-box__item-picture-left'>
            <img className='catalog-box__item-image' src="./img/catalog2.png" alt="Store Wood" />
          </div>
        </a>

        <a className='catalog-box__item' href="/bunk-beds">
          <div className='catalog-box__item-text'>
            <h3 className='catalog-box__item-text-title'>{translationData.bunk}</h3>
            <div className='catalog-box__item-text-link'>
              {translationData.details}</div>
          </div>
          <div className='catalog-box__item-picture'>
            <img className='catalog-box__item-image' src="./img/catalog3.png" alt="Store Wood" />
          </div>
        </a>

        <a className='catalog-box__item' href="/house-beds">
          <div className='catalog-box__item-text  catalog-box__item-text-left'>
            <h3 className='catalog-box__item-text-title'>{translationData.bedHouse}</h3>
            <div className='catalog-box__item-text-link'>
              {translationData.details}</div>
          </div>
          <div className='catalog-box__item-picture-left'>
            <img className='catalog-box__item-image' src="./img/catalog4.png" alt="Store Wood" />
          </div>
        </a>
      </div>

      <div className='firstPage-background'>
        <div className='firstPage-background__picture1'>
          <img className='firstPage-background__image' src="./img/leaves1.png" alt="Store Wood" />
        </div>
        <div className='firstPage-background__picture2'>
          <img className='firstPage-background__image' src="./img/leaves2.png" alt="Store Wood" />
        </div>
      </div>

    </div>
  );
}
