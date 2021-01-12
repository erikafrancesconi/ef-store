/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './MenuItem.css';

const MenuItem = ({ name, img }) => (
  <li className='menu-item'>
    <a href="#" style={{
      backgroundImage: `url(${img})`
    }}>
      <span className='content'>
        {name}
      </span>
    </a>
  </li>
);

export default MenuItem;