import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Grid from './GridContainer/GridContainer';
import Main from './Main/Main';
import Admin from './Admin/Admin';
import Setting from './Admin/Setting/Setting';
import NotFound from './NotFound/NotFound';
import SingleBeds from './Main/Catalog/SingleBeds/SingleBeds';

export default function MainRoute() {
  return (
    <Grid>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/single-beds' element={<SingleBeds />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Grid>
  );
}
