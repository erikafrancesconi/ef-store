import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Cta from '../cta/Cta';
import CollectionItem from '../collection-item/CollectionItem';

import './Collection.css';

const Collection = ({ title, routeName, items }) => {
  const { url } = useRouteMatch();

  return (
    <div className="collection-preview">
      <h3>{title}</h3>
      <ul>
        { items.filter((item, idx) => idx < 4).map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </ul>
      <p>
        <Cta link={`${url}/${routeName}`} text={`Browse all ${title}`} />
      </p>
    </div>
  )
}

export default Collection;