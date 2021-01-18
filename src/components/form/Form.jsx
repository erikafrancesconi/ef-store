import React, { useState }  from 'react';
import { FormInput } from './input/FormInput';

import './Form.css';

export const Form = ({ ...props }) => {
  const { fields, onSubmit, submitLabel } = props;
  
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <FormInput
          key={field.id}
          handleChange={handleChange}
          {...field}
        />
      ))}
      <input type="submit" value={submitLabel} />
    </form>
  )
}