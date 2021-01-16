import React from 'react';
import MenuItem from "../menu-item/MenuItem";
import categories from '../../assets/categories';

import './Directory.css';

const Directory = () => {
  return (
    <ul className='directory-menu'>
      { categories.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />) }
    </ul>
  )
}

export default Directory;