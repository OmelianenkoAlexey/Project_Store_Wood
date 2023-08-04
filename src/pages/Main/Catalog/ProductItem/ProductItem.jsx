import React from 'react';
import './ProductItem.css';
import Instagram from '../../Instagram/Instagram';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductItem() {

  return (
    <>
      <div className='productItem'>
        <div className='product-window'>
          <div className='product-window__gallary'>
            <div className='product-window__gallary-picture'>
              <img className='product-window__gallary-image' src="./img/productItem1.JPG " alt="storeWood" />
            </div>
          </div>

          <div className='product-window__info'>
            <h2 className='product-window__info-title'>Кровать с пружинным матрасом SOFTY</h2>
            <div className='product-window__info-price'>€ 999,00</div>
            <div className='product-window__info-color'>Цвет</div>
            <div className='product-window__info-color-box color-box'>
              <div className='color-box__item'></div>
              <div className='color-box__item'></div>
              <div className='color-box__item'></div>
              <div className='color-box__item'></div>
            </div>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Опис товару
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className='product-window__info-description'>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.</div>
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
                    <div className='product-window__info-description'>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.y</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
}
