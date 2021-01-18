import React from 'react';
import { Cta } from 'components';
import Directory from './components/directory/Directory';

import './Homepage.css';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
      <Cta link='/shop' text='Visit our shop' />
    </div>
  )
};