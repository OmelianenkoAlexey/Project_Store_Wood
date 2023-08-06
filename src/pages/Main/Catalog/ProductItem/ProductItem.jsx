import React from 'react';
import './ProductItem.css';
import Instagram from '../../Instagram/Instagram';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductItem() {

  return (
    <>
      <div className='productItem'>

        <div className='productItem-container container'>
          <div className='productItem-box'>
            <div className='product-window__gallary'>
              <div className='product-window__gallary-picture'>
                <img className='product-window__gallary-image' src="./img/productItem1.JPG " alt="storeWood" />
              </div>
            </div>

            <div className='product-window__info'>
              <div className='product-window__info-starBox'>
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <FontAwesomeIcon className='product-window__info-starBox-item' icon={faStar} />
                <div className='product-window__info-starBox-text'>5.00</div>
              </div>
              <h2 className='product-window__info-title'>Кровать с пружинным матрасом SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY SOFTY</h2>
              <div className='product-window__info-price'>€ 999,00</div>
              <div className='product-window__info-color'>Цвет</div>
              <div className='product-window__info-color-box color-box'>
                <div className='color-box__item item1'></div>
                <div className='color-box__item item2'></div>
                <div className='color-box__item item3'></div>
                <div className='color-box__item item4'></div>
                <div className='color-box__item item5'></div>
              </div>

              {/* <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Опис товару
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className='product-window__info-description'>Мы разработали модель SOFTY для любителей эксклюзивных и удобных кроватей, как в королевских покоях. Эта мягкая и теплая континентальная кровать идеально подходит для спален в стиле барокко и гламур, а также для комнаты принцессы подростка.
                      Континентальная кровать SOFTY является синонимом комфорта и роскоши. Он отличается тонкой строчкой и необычной тафтинговой строчкой. SOFTY имеет просторную лежачую поверхность, так что спать в ней становится сплошным удовольствием. Элегантное изголовье кровати SOFTY придает очарование любой спальне и обеспечивает комфортную поддержку спины. Вы можете оформить свою кровать SOFTY в соответствии со своими пожеланиями и самостоятельно выбрать размер и цвет покрытия.</div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Характеристика товару
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className='product-window__info-description'>Полная длина	207 см
                      Общая высота	122 см
                      лежачая поверхность 	200см
                      общая ширина	142/162/182 см
                      ширина матраса	140/160/180
                      лежачая высота	65 см
                      место для хранения
                      С местом для хранения
                      ножки кровати
                      хромированные ножки</div>
                  </div>
                </div>
              </div>
            </div> */}

            </div>
          </div>

          <h3 className='productItem__title'>Двухэтажная модель с горизонтальными бортиками - эргономичное и практичное решение для небольшой спальни</h3>
          <div className='productItem__description1'>Выдвижная кровать AMELA с двумя кроватями — это предложение для тех, кто ценит функциональность, современный дизайн, точность и качество изготовления.</div>
          <div className='productItem__description2'>Детская кровать AMELA изготовлена ​​из сосновой конструкции, прошедшей жесткие испытания на прочность и безопасность. Кровать прошла испытания на безопасность и соответствует стандартам безопасного использования.</div>
          <div className='productItem__description3'>Кровать с трехслойной поверхностью, окрашенной экологическими красками в соответствии с требованиями стандарта EN 71-3:2013. Соответственно, все краски квалифицированы для окраски детской мебели и имеют соответствующие допуски.</div>



        </div>
      </div>
      <Instagram />
    </>
  );
}
