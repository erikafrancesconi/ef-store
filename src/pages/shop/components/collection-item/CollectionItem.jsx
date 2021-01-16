import React from 'react';

import './CollectionItem.css';

const CollectionItem = ({ name, imageUrl, price}) => {
  return (
    <li className="collection-item">
      <img src={imageUrl} alt='' /> 
      <div className="collection-footer">
        <p>{name}</p>
        <p>{price}€</p>
      </div>
    </li>
  );
}

export default CollectionItem;