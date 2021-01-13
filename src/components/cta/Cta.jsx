import React from 'react';
import { Link } from 'react-router-dom';

import './Cta.css';

const Cta = ({text, link}) => {
  return (
    <Link to={link} className="btn-cta">
      {text}
    </Link>
  )
}

export default Cta;