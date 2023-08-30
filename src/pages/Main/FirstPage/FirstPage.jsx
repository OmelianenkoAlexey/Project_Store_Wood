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


  const translations = {
    en: {
      title: 'Are we considering a project?',
      description: 'We will call you',
      nameLabel: 'Your name',
      emailLabel: 'Email',
      numberLabel: 'Number',
      commentLabel: 'Comments',
      agreementLabel: 'I agree to the processing of my personal data',
      submitButton: 'Send',
      successMessage: 'We have received a message, we will call you soon.',
      descriptionText: 'quality children`s beds and furniture',
      orderDesignButton: 'Order a design',
    },
    de: {
      title: 'Denken wir über ein Projekt nach?',
      description: 'Wir werden dich anrufen',
      nameLabel: 'Dein Name',
      emailLabel: 'E-Mail',
      numberLabel: 'Nummer',
      commentLabel: 'Kommentare',
      agreementLabel: 'Ich stimme der Verarbeitung meiner persönlichen Daten zu',
      submitButton: 'Senden',
      successMessage: 'Wir haben eine Nachricht erhalten, wir werden dich bald anrufen.',
      descriptionText: 'hochwertige Kinderbetten und Möbel',
      orderDesignButton: 'Design bestellen',
    },
    pl: {
      title: 'Rozważamy projekt?',
      description: 'Zadzwonimy do ciebie',
      nameLabel: 'Twoje imię',
      emailLabel: 'Email',
      numberLabel: 'Numer',
      commentLabel: 'Komentarze',
      agreementLabel: 'Zgadzam się na przetwarzanie moich danych osobowych',
      submitButton: 'Wyślij',
      successMessage: 'Otrzymaliśmy wiadomość, wkrótce do ciebie zadzwonimy.',
      descriptionText: 'jakościowe łóżka i meble dziecięce',
      orderDesignButton: 'Zamówienie projektu',
    },
  };

  const formRules = {
    en: {
      name: addFormRules.nameEn,
      email: addFormRules.mailEn,
      number: addFormRules.numberEn,
      comment: addFormRules.comentEn,
    },
    de: {
      name: addFormRules.nameDe,
      email: addFormRules.mailDe,
      number: addFormRules.numberDe,
      comment: addFormRules.comentDe,
    },
    pl: {
      name: addFormRules.namePl,
      email: addFormRules.mailPl,
      number: addFormRules.numberPl,
      comment: addFormRules.comentPl,
    },
  };

  const translationData = translations[language];


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

        <h2 className='firstPage-window__open-title'>{translationData.title}</h2>
        <h2 className='firstPage-window__open-description'>{translationData.description}</h2>

        <form className='firstPage-form' onSubmit={handleSubmit}>

          <InputText
            control={control}
            name='name'
            label={translationData.nameLabel}
            type='text'
            rules={formRules[language].name}
            color='#5E6366'
          />

          <InputText
            control={control}
            name='email'
            label='Email'
            type='text'
            rules={formRules[language].email}
            color='#5E6366'
            rows='1'
          />

          <InputText
            control={control}
            name='number'
            label={translationData.numberLabel}
            type='number'
            rules={formRules[language].number}
            color='#5E6366'
            rows='1'
          />

          <InputText
            control={control}
            name='comment'
            label={translationData.commentLabel}
            type='number'
            rules={formRules[language].comment}
            color='#5E6366'
            rows='2'
          />
        </form>
        <InputCheckbox
          control={control}
          name='agreement' // Укажите уникальное имя для чекбокса
          label={
            <Typography sx={{ color: '#2B2F32', fontFamily: 'Didact Gothic', fontSize: '14px', fontWeight: '400' }}>
              {translationData.agreementLabel}
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
        >{translationData.submitButton}
        </Button>
      </div>

      <div className='firstPage-box container'>
        <h2 className='firstPage-box__title'>StoreWood</h2>
        <div className='firstPage-box__description'>{translations[language].descriptionText}</div>
        <div onClick={touchButton} className='firstPage-box__btn'>{translations[language].orderDesignButton}</div>
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

      <div className='firstPage__picture-main'>
        <div className='firstPage__pictureFirst'>
          <img className='firstPage__image' src="./img/firstPageImage1.png" alt="Store Wood" />
        </div>
        <div className='firstPage__pictureSecond'>
          <img className='firstPage__image' src="./img/firstPageImage2.png" alt="Store Wood" />
        </div>
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
          {translationData.successMessage}
        </MuiAlert>
      </Snackbar>

    </div>
  );
}
