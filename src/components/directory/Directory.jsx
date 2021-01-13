import React from 'react';
import Item from "../../components/menu-item/MenuItem";
import categories from '../../common/categories';

import './Directory.css';

const Directory = () => {
  return (
    <ul className='directory-menu'>
      { categories.map(({ id, ...otherProps }) => <Item key={id} {...otherProps} />) }
    </ul>
  )
}

export default Directory;