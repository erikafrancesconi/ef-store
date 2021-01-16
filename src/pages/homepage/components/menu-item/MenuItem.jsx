import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import './MenuItem.css';

const MenuItem = ({ title, img, link }) => {
  const { url } = useRouteMatch();

  return (
    <li className='menu-item'>
      <Link to={`${url}shop/${link}`} style={{
        backgroundImage: `url(${img})`
      }}>
        <span className='content'>
          {title}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;