import React from 'react';
// import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './GridContainer.css';

export default function GridContainer({ children }) {
  return (
    <div className='GridTemplate'>
          <Header />
          {children}
          <Footer />
    </div>
  );
}
