import React from 'react';
import Cta from '../../components/cta/Cta';
import Directory from '../../components/directory/Directory';

import './Homepage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
      <Cta link='/shop' text='Visit our shop' />
    </div>
  )};

export default HomePage;