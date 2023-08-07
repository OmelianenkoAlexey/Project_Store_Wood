import React, { useContext, useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';
import { Button, Snackbar, Typography } from '@mui/material';
import { InputText } from '../../../components/Forms/InputText';
import { addFormRules } from '../../../constans/rules';
import './FirstPage.css';
import { useForm } from 'react-hook-form';
import { InputCheckbox } from '../../../components/Forms/InputCheckbox';
import { Context } from '../../../Contex';

export default function FirstPage() {
  const { control, handleSubmit, getValues, reset } = useForm();
  const { language } = useContext(Context);

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

  const onSubmit = () => {
    const { name, number, email, comment } = getValues();

    setSuccessOpen(true);
    setClick(false);
    document.body.classList.remove('body-fixed');

    fetch('https://jsonreader.onrender.com/service/json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Ім`я": name,
        "Номер": number,
        "E-mail": email,
        "Коментар": comment,
      }),
    })
      .then(() => {
        reset(); // Reset the form after successful submission
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

        <h2 className='firstPage-window__open-title'>{language === 'ua' ? 'Обміркуємо проєкт?' : 'Are we considering a project?'}</h2>
        <h2 className='firstPage-window__open-description'>{language === 'ua' ? 'Ми вам зателефонуємо' : 'We will call you'}</h2>

        <form className='firstPage-form' onSubmit={handleSubmit}>

          <InputText
            control={control}
            name='name'
            label={language === 'ua' ? 'Ваше ім’я' : 'Your name'}
            type='text'
            rules={language === 'ua' ? addFormRules.name : addFormRules.nameEn}
            color='#5E6366'
          />

          <InputText
            control={control}
            name='email'
            label='Email'
            type='text'
            rules={language === 'ua' ? addFormRules.mail : addFormRules.mailEn}
            color='#5E6366'
            rows='1'
          />

          <InputText
            control={control}
            name='number'
            label={language === 'ua' ? 'Номер' : 'Number'}
            type='number'
            rules={language === 'ua' ? addFormRules.number : addFormRules.numberEn}
            color='#5E6366'
            rows='1'
          />

          <InputText
            control={control}
            name='comment'
            label={language === 'ua' ? 'Коментарі' : 'Comments'}
            type='number'
            rules={language === 'ua' ? addFormRules.coment : addFormRules.comentEn}
            color='#5E6366'
            rows='2'
          />
        </form>
        <InputCheckbox
          control={control}
          name='agreement' // Укажите уникальное имя для чекбокса
          label={
            <Typography sx={{ color: '#2B2F32', fontFamily: 'Didact Gothic', fontSize: '14px', fontWeight: '400' }}>
              {language === 'ua' ? 'Я погоджуюсь на обробку моїх персональних даних' : 'I agree to the processing of my personal data'}
            </Typography>
          }
          defaultValue={true}
          rules={{ required: true }}
        />


        <Button
          sx={{
            color: 'white',
            backgroundColor: '#19772E',
            width: '100%',
            fontSize: '14px',
            fontFamily: 'Didact Gothic',
            fontWeight: '400',
            '&:hover': {
              backgroundColor: '#19772E', // Замените на зеленый цвет, который вам нравится
            },
          }}
          variant="contained"
          size='large'
          onClick={handleSubmit(onSubmit)}
        >{language === 'ua' ? 'Надіслати' : 'Send'}
        </Button>
      </div>

      <div className='firstPage-box container'>
        <h2 className='firstPage-box__title'>StoreWood</h2>
        <div className='firstPage-box__description'>{language === 'ua' ? 'якісні дитячі ліжка та меблі' : 'quality children`s beds and furniture'}</div>
        <div onClick={touchButton} className='firstPage-box__btn'>{language === 'ua' ? 'Замовити дизайн' : 'Order a design'}</div>
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
        <div className='firstPage-background__picture1'>
          <img className='firstPage-background__image' src="./img/leaves1.png" alt="Store Wood" />
        </div>
        <div className='firstPage-background__picture2'>
          <img className='firstPage-background__image' src="./img/leaves2.png" alt="Store Wood" />
        </div>
      </div>

      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSuccessClose} severity="success">
          {language === 'ua' ? 'Ми отримали повідомлення, скоро Вам зателефонуємо.' : 'We have received a message, we will call you soon.'}
        </MuiAlert>
      </Snackbar>

    </div>
  );
}
