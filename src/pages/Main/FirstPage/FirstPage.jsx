import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';
import { Snackbar } from '@mui/material';
import './FirstPage.css';

export default function FirstPage() {

  const [click, setClick] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const touchButton = () => {
    setClick(true);
    document.body.classList.add('body-fixed');
  };

  const touchButtonClose = () => {
    setClick(false);
    document.body.classList.remove('body-fixed');
  };

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    setSuccessOpen(true);
    e.preventDefault();
    console.log(formData);

    setClick(false);
    document.body.classList.remove('body-fixed');


    const { name, number, email, comment } = formData;

    fetch('https://jsonreader.onrender.com/service/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Ім`я" : name,
        "Номер" : number,
        "E-mail" : email,
        "Коментар" : comment,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Очистка полей формы после отправки.
          setFormData({
            name: '',
            number: '',
            email: '',
            comment: ''
          });
        }
      })
      .catch((error) => {
        console.log('Ошибка отправки данных:', error);
      });
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div className='firstPage'>

      <div onClick={touchButtonClose} className={`firstPage-window ${click ? 'opacity' : ''}`}></div>

      <div className={`firstPage-window__open ${click ? 'firstPage-window__open-true opacity' : ''}`}>
        <img onClick={touchButtonClose} className='firstPage-window__open-close' src="./img/close-window.svg" alt="" />
        <img className='firstPage-window__open-logo' src="./img/logo-header.svg" alt="" />

        <h2 className='firstPage-window__open-title'>Обговоримо проєкт? Ми зателефонуємо</h2>

        <form className='firstPage-form' onSubmit={handleSubmit}>
          <input
            className='firstPage-input'
            placeholder='Ім`я'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className='firstPage-input'
            placeholder='Номер'
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />

          <input
            className='firstPage-input'
            placeholder='E-mail'
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className='firstPage-input-comment'
            placeholder='Коментар'
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button className='firstPage-button' type="submit">Надіслати</button>
        </form>
      </div>

      <div className='firstPage-box container'>
        <h2 className='firstPage-box__title'>StoreWood</h2>
        <div className='firstPage-box__description'>якісні дитячі ліжка та меблі</div>
        <div onClick={touchButton} className='firstPage-box__btn'>Замовити дизайн</div>
        <div className='firstPage-box__social'>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='firstPage-box__social-icon' />
          </a>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className='firstPage-box__social-icon' />
            {/* <FontAwesomeIcon icon={faFacebook} className='firstPage-box__social-icon' /> */}
          </a>
          <a className='firstPage-box__social-item' href="https://www.instagram.com/legenda_parfum/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faViber} className='firstPage-box__social-icon' />
          </a>
        </div>
      </div>
      <div className='firstPage__pictureFirst'>
        <img className='firstPage__image' src="./img/firstPageImage1.png" alt="Store Wood" />
      </div>
      <div className='firstPage__pictureSecond'>
        <img className='firstPage__image' src="./img/firstPageImage2.png" alt="Store Wood" />
      </div>
      <div className='firstPage-background'>
        <div className='firstPage-background__picture'>
          <img className='firstPage-background__image' src="./img/leaves.png" alt="Store Wood" />
        </div>
      </div>

      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSuccessClose} severity="success">
          Ми отримали повідомлення, скоро Вам зателефонуємо.
        </MuiAlert>
      </Snackbar>

    </div>
  );
}
