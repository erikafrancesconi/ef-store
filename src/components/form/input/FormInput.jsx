import React from 'react';

import './FormInput.css';

export const FormInput = ({id, label, handleChange, ...otherProps }) => {
  return (
    <div className="pb-1">
      <label htmlFor={`input${id}`}>
        {label}
      </label>
      <input id={`input${id}`} onChange={handleChange} {...otherProps} />
    </div>
  )
}