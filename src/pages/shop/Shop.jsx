import React from 'react';

import shopdata from './assets/shopdata';
import Collection from './components/collection/Collection';

import './Shop.css';

export const Shop = () => {
  return (
    <React.Fragment>
      <h2>Shop</h2>
      { shopdata.map(({ id, ...otherProps }) => (
        <Collection key={id} {...otherProps} />
      )) }
    </React.Fragment>
  )
}